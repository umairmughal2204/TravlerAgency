import { motion } from "framer-motion";

const features = [
  {
    icon: "🌍",
    title: "Expert Guides",
    description: "Our experienced guides ensure safe, insightful, and memorable journeys.",
    animation: "animate-bounce"
  },
  {
    icon: "🛫",
    title: "Custom Packages",
    description: "Tailored travel experiences for every taste and budget.",
    animation: "animate-pulse"
  },
  {
    icon: "💬",
    title: "24/7 Support",
    description: "We’re always here for you, wherever your adventure takes you.",
    animation: "animate-bounce"
  }
];

export default function Features() {
  return (
    <section className="container mx-auto py-16 px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Why Travel With Us?
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="bg-green-50 p-8 rounded-xl shadow-lg flex flex-col items-center transition"
          >
            <span className={`text-green-600 text-4xl mb-4 ${f.animation}`}>{f.icon}</span>
            <h3 className="text-xl font-bold text-green-700 mb-2">{f.title}</h3>
            <p className="text-green-800 text-center">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
