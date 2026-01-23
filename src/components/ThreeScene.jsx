import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const canvasRef = useRef(null);
    const sceneRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !canvasRef.current) return;

        let scene, camera, renderer, geometry, material, cube, particles;
        let animationId;

        const init = () => {
            try {
                // Scene setup
                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                renderer = new THREE.WebGLRenderer({
                    canvas: canvasRef.current,
                    alpha: false,
                    antialias: true,
                    preserveDrawingBuffer: true
                });
                renderer.setClearColor(0x000000, 0);

                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                camera.position.z = 5;

                // Main rotating cube
                geometry = new THREE.BoxGeometry(2, 2, 2);
                material = new THREE.MeshPhongMaterial({
                    color: 0x8b5cf6,
                    shininess: 100,
                    wireframe: false,
                    emissive: 0x8b5cf6,
                    emissiveIntensity: 0.2
                });
                cube = new THREE.Mesh(geometry, material);
                scene.add(cube);

                // Wireframe overlay
                const wireframeGeo = new THREE.EdgesGeometry(geometry);
                const wireframeMat = new THREE.LineBasicMaterial({ color: 0xec4899, linewidth: 2 });
                const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
                cube.add(wireframe);

                // Particle field
                const particlesGeometry = new THREE.BufferGeometry();
                const particlesCount = 1000;
                const posArray = new Float32Array(particlesCount * 3);

                for (let i = 0; i < particlesCount * 3; i++) {
                    posArray[i] = (Math.random() - 0.5) * 10;
                }

                particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
                const particlesMaterial = new THREE.PointsMaterial({
                    size: 0.02,
                    color: 0x8b5cf6,
                    transparent: true,
                    opacity: 0.8,
                    blending: THREE.AdditiveBlending
                });

                particles = new THREE.Points(particlesGeometry, particlesMaterial);
                scene.add(particles);

                // Lights
                const pointLight = new THREE.PointLight(0x8b5cf6, 1);
                pointLight.position.set(5, 5, 5);
                scene.add(pointLight);

                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                scene.add(ambientLight);

                sceneRef.current = { scene, camera, renderer, cube, particles };
            } catch (error) {
                console.error('Three.js initialization error:', error);
                setHasError(true);
            }
        };

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            if (sceneRef.current) {
                const { cube, particles, renderer, scene, camera } = sceneRef.current;

                // Rotate based on mouse position
                cube.rotation.x += 0.005 + mousePosition.y * 0.001;
                cube.rotation.y += 0.005 + mousePosition.x * 0.001;

                particles.rotation.y += 0.0005;
                particles.rotation.x += 0.0002;

                renderer.render(scene, camera);
            }
        };

        const handleResize = () => {
            if (sceneRef.current) {
                const { camera, renderer } = sceneRef.current;
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
        };

        if (canvasRef.current) {
            init();
            animate();
            window.addEventListener('resize', handleResize);
        }

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);

            if (sceneRef.current && sceneRef.current.renderer) {
                const renderer = sceneRef.current.renderer;
                const canvas = renderer.domElement;

                renderer.dispose();
                renderer.forceContextLoss();

                if (canvas) {
                    canvas.width = canvas.width;
                    canvas.height = canvas.height;

                    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
                    if (gl) {
                        gl.getExtension('WEBGL_lose_context')?.loseContext();
                    }
                }
            }

            sceneRef.current = null;
        };
    }, [mousePosition]);

    const handleMouseMove = (e) => {
        setMousePosition({
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1
        });
    };

    if (hasError) {
        return (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse opacity-20" />
                </div>
            </div>
        );
    }

    return (
        <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            className="absolute inset-0 w-full h-full"
        />
    );
};

export default ThreeScene;
