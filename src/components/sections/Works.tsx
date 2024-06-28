import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import {  link } from "../../assets";// Assuming link is a path to your link icon
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<TProject> = ({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.1, 0.2)}>
      <Tilt
        glareEnable
        glareMaxOpacity={0.45}
        glareColor="#aaa6c3"
        tiltEnable
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
      >
        <div className="bg-tertiary rounded-xl p-2 sm:p-4">
          <div className="relative rounded-xl h-[200px] sm:h-[230px]">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-xl object-cover"
            />
            <div className="card-img_hover rounded-xl absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="bg-black flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={link}
                  alt="link"
                  className="h-5 w-5 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-5 rounded-xl">
            <h3 className="text-[18px] sm:text-[20px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[12px] sm:text-[14px]">{description}</p>
          </div>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full rounded-xl">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
