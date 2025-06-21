import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-100 via-white to-green-50 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-4 leading-tight drop-shadow-lg">
            Discover Your Next <span className="text-green-500">Adventure</span>
            <br className="hidden md:inline" />
            with <span className="text-green-600">Mohsin Travelers</span>
          </h1>
          <p className="text-xl text-green-900 mb-8">
            Explore the world in style, comfort, and safety. Unforgettable journeys, curated for you.
          </p>
          <motion.a
            href="/packages"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition animate-bounce"
            whileTap={{ scale: 0.95 }}
          >
            View Packages
          </motion.a>
        </motion.div>
        {/* Hero Image */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <img
            src="/images/hero-travel.png"
            alt="Travelers"
            className="w-[350px] h-[350px] object-cover rounded-full shadow-2xl border-8 border-green-200 animate-pulse"
          />
        </motion.div>
      </div>
      {/* Decorative Animated Circles */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-70 animate-ping"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-green-100 rounded-full opacity-50 animate-pulse"
      />
    </section>
  );
}
