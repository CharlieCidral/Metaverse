'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center"/>
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span className="font-extrabold text-white">Metaverse, </span>
         the ultimate destination for all things meta!

        <span className="font-extrabold text-white"> What is meta, you ask?</span>
         Meta refers to information that is about other information. It's the layer of abstraction that allows us to think and communicate about  complex
         
        <span className="font-extrabold text-white"> concepts and ideas. </span>

        On our website, you'll find a wide range of resources and tools designed to help you explore 
        <span className="font-extrabold text-white"> the world of meta. </span>
        From in-depth articles and analysis to interactive quizzes and games, we have something for everyone.

        Whether you're a seasoned pro or just starting to delve into the world of meta, we have something for you. So come on in and start discovering the
        <span className="font-extrabold text-white"> endless possibilities </span>
         of the metaverse!
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
