
"use client"
import Link from "next/link"
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { textVariant2 } from "../utils/motion"
import Image from "next/image"

interface PortfolioProjects {
  id: Number;
  title: string;
  github?: string;
  webapp?: string;
  prewview?: string;
  snap: any;
}

const ProjectCard: React.FC<PortfolioProjects> = () => {
  return (
    <motion.div
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className="rounded-md shadow-2xl drop-shadow-md backdrop-blur shadow-black overflow-hidden hover:shadow-gray-800 hover:bg-black"
    >
      <div className="h-[250px] w-full p-4 relative">
        <Image
          src="https://edusportal.com/wp-content/uploads/2017/08/noun-project.jpg"
          alt="project"
          width={100}
          height={100}
          className="h-full w-full overflow-hidden rounded-md opacity-80 object-cover"
        />
        <div className="absolute top-0 left-0 bg-gray-100 bg-opacity-50 backdrop-blur flex items-center justify-center">
        </div>
      </div>
      <div className="px-4 pb-2">
        <div className="flex items-center justify-between">
          <Link href="https://github.com" target="_blank">
            <div className="text-sm flex items-center gap-2 text-white hover:text-red-500 border-[1.5px] border-gray-600 hover:border-red-500 rounded-2xl px-2 py-1">
              <BsGithub />
              <span>Source Code</span>
            </div>
          </Link>
          <Link href="https://github.com" target="_blank">
            <div className="text-center text-sm flex items-center gap-2 hover:text-blue-500 border-[1.5px] border-gray-600 hover:border-blue-500  rounded-2xl px-2 py-1 text-white">
              <span>Live Demo</span>
              <FiExternalLink />
            </div>
          </Link>
        </div>
        <h1 className="text-[#f1f5f8] md:text-xl py-4">Travel App Design Creativity & Application</h1>
      </div>
      <div className="absolute top-2 right-2 bg-green-500 px-2 py-1 text-white">
        <span>Next Js</span>
      </div>
    </motion.div>
  )
}
