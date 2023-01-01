'use client';

import { motion } from "framer-motion";

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText  
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover"/>

        <div className="absolute bottom-[16.7%] right-[8.7%] w-[75px] h-[75px] rounded-full blur-lg">
            <img src="people-01.png" alt="people" className="w-full h-full"/>
        </div>
        <div className="absolute bottom-[17%] right-[9%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#6d6680] cursor-pointer">
            <img src="people-01.png" alt="people" className="w-full h-full"/>
        </div>

        <div className="absolute top-[49.5%] left-[17.7%] w-[205px] h-[150px] rounded-[24px]  blur-lg">
          <img src="planet-42v2.png" alt="planet" className="w-full h-full rounded-3xl"/>
        </div>
        <div className="absolute top-[50%] left-[18%] w-[200px] h-[145px] p-[6px] rounded-[24px] bg-[#6d6680] cursor-pointer">
          <img src="planet-42v2.png" alt="planet" className="w-full h-full rounded-3xl"/>
          <div className="absolute top-[39.5%] left-[11%]">
            <div className="flex flex-row pt-2">
              <img src="people-04.png" alt="followers" className="absolute left-[0%] w-[24px] h-[24px] rounded-full z-30"/>
              <img src="people-05.png" alt="followers" className="absolute left-[10%]  w-[24px] h-[24px] rounded-full z-20"/>
              <img src="people-06.png" alt="followers" className="absolute left-[20%] w-[24px] h-[24px] rounded-full z-10"/>
              <p className="absolute pl-[55px] pt-[2px] text-white text-[12px] font-thin whitespace-nowrap">
                + 264 has joined
              </p>
            </div>
            <div className="p-2 mt-[20px] pt-[10px]">
              <h2 className="text-white font-semibold">The Upside Down</h2>
            </div>
          </div>
        </div>

        <div className="absolute top-[13.5%] right-[23%] w-[205px] h-[150px] rounded-[24px]  blur-lg">
          <img src="planet-45.png" alt="planet" className="w-full h-full rounded-3xl"/>
        </div>
        <div className="absolute top-[13.5%] right-[23%] w-[200px] h-[145px] p-[6px] rounded-[24px] bg-[#6d6680] cursor-pointer">
          <img src="planet-45.png" alt="planet" className="w-full h-full rounded-3xl "/>
          <div className="absolute top-[39.5%] left-[11%]">
            <div className="flex flex-row pt-2">
              <img src="people-04.png" alt="followers" className="absolute left-[0%] w-[24px] h-[24px] rounded-full z-30"/>
              <img src="people-05.png" alt="followers" className="absolute left-[10%]  w-[24px] h-[24px] rounded-full z-20"/>
              <img src="people-06.png" alt="followers" className="absolute left-[20%] w-[24px] h-[24px] rounded-full z-10"/>
              <p className="absolute pl-[55px] pt-[2px] text-white text-[12px] font-thin whitespace-nowrap">
                + 264 has joined
              </p>
            </div>
            <div className="p-2 mt-[20px] pt-[10px]">
              <h2 className="text-white font-semibold">Hawkins Lab</h2>
            </div>
          </div>
        </div>

        <div className="absolute top-[11.5%] left-[9.7%] w-[75px] h-[75px] rounded-full blur-lg">
          <img src="people-02.png" alt="people" className="w-full h-full"/>
        </div>
        <div className="absolute top-[12%] left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#6d6680] cursor-pointer">
          <img src="people-02.png" alt="people" className="w-full h-full"/>
        </div>

        <div className="absolute top-[49%] left-[44.7%] w-[75px] h-[75px] rounded-full blur-lg">
          <img src="people-03.png" alt="people" className="w-full h-full"/>
        </div>
        <div className="absolute top-[50%] left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#6d6680] cursor-pointer">
          <img src="people-03.png" alt="people" className="w-full h-full"/>
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
