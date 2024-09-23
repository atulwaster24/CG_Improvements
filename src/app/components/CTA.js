import React from 'react'
import Link from 'next/link'

const CTA = () => {
  return (
    <section>
        <div className="bg-CG_Orange rounded-xl py-6 px-8 lg:p-10 w-[80%] mx-auto">
        <div className="flex justify-around items-center gap-4">
          <p className="text-CG_White font-semibold text-sm lg:text-xl">
            To connect with Geeta for insightful discussions and cooperation,<br />
            please get in touch at
          </p>
          <button className="border-2 border-CG_White text-sm font-bold text-CG_White rounded-xl px-4 py-2 hover:bg-CG_White hover:text-CG_Orange"><Link href={"/contact"}>Contact&nbsp;Us</Link></button>
        </div>
      </div>
    </section>
  )
}

export default CTA