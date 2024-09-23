"use client"
import Heading from "../components/Heading";
import TitleBtn from "../components/TitleBtn";
import { motion } from 'framer-motion';


import ToolsCard from "../components/ToolsCard";
import { Tools } from "../constant/data";



const Skills = () => {
  return (
    <section className="min-h-[100vh] py-8">
      <TitleBtn title="skills"/>
      <Heading
        ftitle="Tools &"
        stitle="Technology"
      />

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
        {Tools.map((item)=>(
          <ToolsCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
    // <section className="min-h-[100vh] py-8">
    //   <TitleBtn title="skills" />
    //   <Heading ftitle="Tools &" stitle="Technology" />

    //   <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
        
          /* <motion.div
            
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="group"
          > */
            /* <div className="border-[1.5px] border-gray-400 hover:border-green-500 rounded-full p-4 overflow-hidden w-full">
              <Image
                src=
                alt=
                width={50}
                height={50}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="object-cover"
              />
            </div> */
            /* <h2 className="text-center group-hover:text-green-500 text-white mt-2"></h2>
          </motion.div> */
      
    //   </div>
    // </section>
  );
}

export default Skills;
