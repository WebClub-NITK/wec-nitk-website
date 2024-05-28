import { motion } from 'framer-motion'

function RotatingDotsLoader() {
    const rotateVariants = {
      rotate: {
        rotate: 360,
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        },
      },
    }
  
    return (
      <div className="flex items-center justify-center">
        <motion.div
          className="relative h-12 w-12"
          variants={rotateVariants}
          animate="rotate"
        >
          <motion.div
            className="absolute left-0 top-0 h-4 w-4 rounded-full bg-primary-300"
            initial="initial"
            animate="animate"
            transition={{ delay: 0 }}
          ></motion.div>
          <motion.div
            className="absolute right-0 top-0 h-4 w-4 rounded-full bg-primary-300"
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-4 w-4 rounded-full bg-primary-300"
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-primary-300"
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
          ></motion.div>
        </motion.div>
      </div>
    )
  }

export default function () {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm dark:bg-gray-950/50">
            <div className="flex flex-col items-center space-y-4">
                <RotatingDotsLoader />
                {/* <div className="flex space-x-2 animate-bounce">
                    <div className="h-3 w-3 rounded-full bg-gray-50" />
                    <div className="h-3 w-3 rounded-full bg-gray-50 delay-100" />
                    <div className="h-3 w-3 rounded-full bg-gray-50 delay-200" />
                </div> */}
            </div>
        </div>
    )
}





