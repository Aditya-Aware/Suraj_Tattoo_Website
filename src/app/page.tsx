import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-dark to-dark-lighter">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-light mb-6">
            Welcome to Our Tattoo Studio
          </h1>
          <p className="text-xl text-light-darker mb-8">
            Where Art Meets Skin
          </p>
          <button className="btn-primary">
            Book an Appointment
          </button>
        </motion.div>
      </section>
    </div>
  )
}