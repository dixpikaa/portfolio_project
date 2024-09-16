'use client'

import Countup from "../components/Countup"
import TitleBtn from "../components/TitleBtn"
import { Countupdata } from "../constant/data"
import { motion } from 'framer-motion'
import { textVariant2 } from "../utils/motion"


const Intro = ({ full_name, bio }: { full_name: string, bio: string }) => {

  return (

    <section className="md:h-[100vh] py-8">
      <TitleBtn title="introduction" />
      <div className="mt-8 text-white max-w-[800px]">
        <div className="text-green-500">Hi there,</div>
        <p className="text-[2rem] md:text-[3rem]">I&apos;m {full_name},</p>
        <div className="text-[2rem] md:text-[3rem]"> <span className="text-green-500"> Web Developer</span></div>
      </div>
      <p className="text-gray-400 text-xl mt-8">{bio}</p>

      <motion.div
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="flex items-center justify-around flex-col md:flex-row mt-12 border border-gray-600 hover:border-green-500 rounded-3xl px-4 py-8 shadow-md">
        {Countupdata.map(item => (
          <Countup
            key={item.id}
            {...item}
          />
        ))}
      </motion.div>
    </section>

  )

}

export default Intro