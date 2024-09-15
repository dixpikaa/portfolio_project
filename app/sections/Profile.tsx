"use client"

import Button from "../components/Button"
import IconBtn from "../components/IconBtn"
import { SocialLinks } from "../constant/data"
import { motion } from 'framer-motion'
import { slideIn, textVariant2 } from "../utils/motion"
import Image from "next/image"

const Profile = () => {
  const currentYear = new Date().getFullYear();
  return (
    <motion.section
      variants={slideIn('left', 'between', 0.2, 1)}
      className="border-[1px] h-auto md:h-full border-gray-900 rounded-3xl secondary-text-color py-4 px-8"
    >
      <div className="flex items-center justify-between px-2 py-1">

        {/* <div className="text-sm text-white italic"><span>Full Stack</span> <br /> Developer</div> */}
      </div>
      <div className="
      mx-8 my-4 rounded-full overflow-hidden">
        <Image
          src="/img/profile.png"
          alt="provile image"
          width={100}
          height={100}
          priority
          unoptimized
          style={{ width: "35vh", height: "35vh", objectFit: 'cover' }}
          className="object-cover rounded-full"
        />
      </div>
      <div className="text-center space-y-4 group">
        <h1 className="uppercase text-3xl font-bold text-green-500">Dipika Timalsina</h1>
        <small className=" text-orange-500 group-hover:underline"> Web Developer</small>
        <div className="text-gray-400">Duwakot, Bhaktapur</div>
        <a data-tooltip="Click to Call Now" href="tel:861490010" className="hover:text-green-500 tooltip">+977 9861490010</a> <br />
        <a data-tooltip="Click to Send Email" href="mailto:dixpikaa@gmail.com" className="hover:text-green-500 tooltip">dixpikaa@gmail.com</a>
      </div>

      <motion.div variants={textVariant2} initial="hidden" whileInView="show" className="flex items-center justify-center gap-4 my-8">
        {SocialLinks.map(item => (
          <IconBtn
            key={item.id}
            {...item}
          />
        ))}
      </motion.div>
      <a data-tooltip="Call Now" href="tel:9861490010" className="tooltip">
        <Button title="hire me" />
      </a>
      <div className="mt-8 text-center text-gray-500">
        <p>© {currentYear} Deepika, All Rights Reserved</p>
      </div>

    </motion.section>
  )
}

export default Profile