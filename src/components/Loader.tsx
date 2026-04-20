import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  // Rocket container animation - launches upward
  const rocketVariants = {
    initial: {
      y: 20,
      opacity: 1,
      scale: 1,
    },
    animate: {
      y: -400,
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
      },
    },
  };

  // Bounce animation before launch
  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 0],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  // Smoke particle animation
  const smokeVariants = {
    initial: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    animate: (custom: number) => ({
      opacity: 0,
      scale: 0,
      y: 30,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: custom * 0.1,
      },
    }),
  };

  // Glow pulse animation
  const glowVariants = {
    initial: { opacity: 0.6, scale: 1 },
    animate: {
      opacity: [0.6, 1, 0.6],
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: 2,
        ease: 'easeInOut',
      },
    },
  };

  const loaderVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={loaderVariants}
      initial="initial"
      exit="exit"
      onAnimationComplete={onComplete}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] z-50"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Rocket container */}
      <motion.div
        className="relative flex flex-col items-center justify-center"
        variants={rocketVariants}
        initial="initial"
        animate="animate"
      >
        {/* Glow effect around rocket */}
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full filter blur-2xl"
        />

        {/* Rocket icon */}
        <motion.div
          variants={bounceVariants}
          initial="initial"
          animate="animate"
          className="relative z-10"
        >
          <Rocket className="w-20 h-20 text-white filter drop-shadow-lg" />
        </motion.div>

        {/* Smoke trail particles */}
        <div className="absolute top-full mt-2 flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={smokeVariants}
              initial="initial"
              animate="animate"
              className="w-3 h-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-sm opacity-60"
            />
          ))}
        </div>
      </motion.div>

      {/* Loading text */}
      <div className="absolute bottom-20 flex flex-col items-center gap-2">
        <p className="text-white text-lg font-semibold">Launching your experience</p>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
