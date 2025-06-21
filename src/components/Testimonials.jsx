import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "An amazing experience! Mohsin Travelers made everything easy and fun.",
    name: "Ayesha K.",
  },
  {
    quote: "Highly recommended for their professionalism and attention to detail.",
    name: "Bilal S.",
  },
  {
    quote: "The best travel agency I’ve ever used. Will book again!",
    name: "Sara M.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-green-700 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          What Our Travelers Say
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white p-6 rounded-lg shadow w-80"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-green-800 italic mb-4">"{t.quote}"</p>
              <span className="block font-bold text-green-700">– {t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
