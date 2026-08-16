import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Globe, Zap, TrendingUp, Shield } from 'lucide-react';

const ProductionImpact = () => {
  const metrics = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "800+",
      label: "MedVoryx Users",
      description: "Live healthcare platform",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Building className="w-6 h-6" />,
      value: "100+",
      label: "CDNTBank Users",
      description: "FinTech banking platform",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "$200M+",
      label: "Annual Volume",
      description: "AgncyPay CRM transactions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: "4",
      label: "Live Products",
      description: "Production systems deployed",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: "Real-time",
      label: "Systems",
      description: "Aviation & streaming platforms",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: "Enterprise",
      label: "Security",
      description: "Banking & healthcare compliance",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
            Production <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real products serving real users with measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:border-red-500/30 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.color} mb-4 group-hover:scale-110 transition-transform`}>
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            All systems operational and serving users
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionImpact;
