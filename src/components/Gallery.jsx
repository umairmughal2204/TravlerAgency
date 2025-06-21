import { motion } from "framer-motion";

const images = [
  "/images/paris.jpg",
  "/images/maldives.jpg",
  "/images/tokyo.jpg",
  "/images/istanbul.jpg"
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-green-700 mb-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Travel Moments
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {images.map((src, idx) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              className="rounded-lg shadow-lg border-4 border-white hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.08 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
