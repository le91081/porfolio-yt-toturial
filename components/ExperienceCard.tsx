"use client";

import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://static.toiimg.com/photo/107091638.cms"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Engineer</h4>
        <p className="font-bold text-2xl mt-1">Pegatron</p>
        <div className="flex space-x-2 my-2">
          <SocialIcon
            url="https://www.youtube.com/sonnysangha"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
