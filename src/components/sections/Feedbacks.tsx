import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";

interface FeedbackCardProps extends TTestimonial {
  index: number;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  icon,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <img src={image} className="py-3" style={{ borderRadius: '5%', display: 'block', margin: 'auto' }} />
    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white">{testimonial}</p>
      <div className="py-3">
        <a className="py-4 text-[12px]" href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      </div>
      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-secondary mt-1 text-[12px]">
            {designation} {company}
          </p>
        </div>
        <img
          src={icon}
          alt={`feedback_by-${name}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}>
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 justify-center items-center`}>
        {/* Centering container */}
        <div className="flex flex-wrap justify-center gap-7">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={`${testimonial.name}-${index}`} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
