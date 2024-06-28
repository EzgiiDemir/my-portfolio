import React, { Suspense, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
const ComputersCanvas = React.lazy(() => import("../canvas/Computers.tsx"));

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = React.memo(({ index, title, icon }) => (
  <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
));

const About = () => {
  const servicesMemo = useMemo(() => services, []);

  return (
    <>
      <div className="flex flex-wrap justify-between gap-4">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <Header useMotion={true} {...config.sections.about} />
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
          >
            {config.sections.about.content}
          </motion.p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-end">
          <div className="w-full h-full max-w-[500px]">
            <Suspense fallback={<div>Loading...</div>}>
              <ComputersCanvas />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center max-sm:justify-center">
        {servicesMemo.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
