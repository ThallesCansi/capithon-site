import { motion } from 'framer-motion'

export function SignalOrb() {
  return (
    <div className="signal-orb" aria-hidden="true">
      <div className="orb-halo orb-halo-a" />
      <div className="orb-halo orb-halo-b" />
      <motion.div
        className="orb-core"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <span className="orb-node node-a" />
        <span className="orb-node node-b" />
        <span className="orb-node node-c" />
        <div className="orb-ring ring-a" />
        <div className="orb-ring ring-b" />
      </motion.div>
      <div className="orb-center">
        <img src="/viu-ai-logo.png" alt="" />
      </div>
      <div className="orb-caption">
        <span>LIVE SIGNAL</span>
        <strong>Decision intelligence</strong>
      </div>
    </div>
  )
}
