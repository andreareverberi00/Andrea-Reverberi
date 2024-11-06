import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Gamepad2 size={64} className="text-violet-400" />
      </motion.div>
    </motion.div>
  );
} 