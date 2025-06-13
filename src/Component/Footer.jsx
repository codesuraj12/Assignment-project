import React from 'react'

const Footer = () => {
  return (
  <footer className="py-12 bg-black border-t border-gray-800 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Animated Row */}
    <div className="relative w-full h-12 animate-slide">
      <div className="absolute animate-slide flex flex-nowrap justify-center items-center gap-8 text-white/40 text-nowrap">
        <span className="text-6xl font-bold">FIGMA</span>
        <span className="text-4xl">✱</span>
        <span className="text-6xl font-bold">DESIGNER</span>
        <span className="text-4xl">✱</span>
        <span className="text-6xl font-bold">DEVELOPER</span>
        <span className="text-4xl">✱</span>
        <span className="text-6xl font-bold">FIGMA</span>
        <span className="text-4xl">✱</span>
        <span className="text-6xl font-bold">DESIGNER</span>
        <span className="text-4xl">✱</span>
        <span className="text-6xl font-bold">DEVELOPER</span>
      </div>
    </div>
  </div>
  <h1 className="text-center p-10 text-white text-4xl bold">LET'S TALK!</h1>
</footer>
  )
}

export default Footer