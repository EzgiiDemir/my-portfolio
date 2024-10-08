import React, { useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

interface ExperienceCardProps extends TExperience {
  link: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = React.memo(
  ({ date, title, companyName, points, icon, iconBg, link }) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={date}
        iconStyle={{ background: iconBg }}
        icon={
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={icon}
              alt={companyName}
              className="h-[60%] w-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-[24px] font-bold text-white">{title}</h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {companyName}
          </p>
        </div>

        <ul className="ml-5 mt-5 list-disc space-y-4">
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 pl-1 text-[14px] tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
        {link && (
          <a
            href={link}
            className="pl-1 text-[12px] tracking-wider text-purple-400"
          >
            {link}
          </a>
        )}
      </VerticalTimelineElement>
    );
  }
);

const Experience = () => {
  const memoizedExperiences = useMemo(() => experiences, []);
  const experienceConfig = useMemo(() => config.sections.experience, []);

  return (
    <>
      <Header useMotion={true} {...experienceConfig} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {memoizedExperiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              {...experience}
              link={experience.link || ""}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
