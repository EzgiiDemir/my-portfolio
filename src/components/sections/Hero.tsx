import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
// import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin, faMedium, faWordpress } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div className={`absolute inset-0  mx-auto max-w-7xl ${styles.paddingX} flex flex-row  gap-5`}>
        <div className=" flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="items-start  flex flex-col justify-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name} 👋</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <div className="mt-5 flex gap-5">
            <a href="mailto:ezgidemir824@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://github.com/EzgiiDemir" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/ezgi-demir-99750b200/" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://medium.com/@ezgidemir824" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
            <a href="https://ezgiwith.wordpress.com/" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FontAwesomeIcon icon={faWordpress} size="2x" />
            </a>
            <a href="https://www.instagram.com/ezgiidemr_/" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />

          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
