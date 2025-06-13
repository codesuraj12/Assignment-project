import React from 'react'

const Faq = () => {
  return (
    <section className="py-20 bg-black" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-2xl">✱</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Frequently asked questions</h2>
          </div>

          <div className="space-y-8 max-w-4xl">
            <div>
              <h3 className="text-white text-xl font-medium mb-4">What is your design process?</h3>
              <p className="text-white/60 leading-relaxed">
                My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user, goal their problems, and the market they're in. In the design phase, I create wireframes and visual designs that meet their goals and solve their problems. Throughout the design process, I create prototypes to facilitate testing or feedback. In the test phase, I collect feedback from users to refine the design.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl font-medium mb-2">What tools and software do you use for UX design?</h3>
            </div>

            <div>
              <h3 className="text-white text-xl font-medium mb-2">How do you measure the success of your UX designs?</h3>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Faq