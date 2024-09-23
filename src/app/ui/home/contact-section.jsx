import React from 'react'
import CTA from '@/app/components/CTA'

const ContactSection = () => {
  return (
    <section className="">
        <div className="w-full flex justify-center items-center p-6 flex-col">
          <h1 className="text-center text-2xl lg:text-3xl text-gray-700 pb-6 lg:pb-12 font-bold">
            Your Voice Matters: Reach Out to Geeta Jain
          </h1>
          <CTA />
        </div>
      </section>
  )
}

export default ContactSection