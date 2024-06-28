type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];

  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Ezgi's Portfolio",
    fullName: "Ezgi Demir",
    email: "ezgidemir824@gmail.com",
  },
  hero: {
    name: "Ezgi",
    p: ["Front-End Developer"],

  },
  contact: {
    p: "",
    h2: "Resume.",
    form: {
      name: {
        span: "",
        placeholder: "",
      },
      email: { span: "", placeholder: "" },
      message: {
        span: "",
        placeholder: "",
      },
    },
  },
  sections: {
    about: {

      p: "Introduction",
      h2: "Overview.",
      content: `I learn and utilize frameworks like React, Vue, and Angular with JavaScript and TypeScript to develop SEO-friendly, responsive projects. I also have experience with Three.js for 3D designs and prioritize UI/UX development.

I have foundational knowledge in backend development and have worked on aspects like testing and performance optimization in projects. I am dedicated to making a difference in projects by closely collaborating with clients, driven by my passion for problem-solving and creative approach.

I strive to push the boundaries of technology and focus on solutions that prioritize user experience.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Projects.",
    },
    feedbacks: {
      p: "Platform",
      h2: "Websites.",
    },
    works: {
      p: "My works",
      h2: "Certificates and more.",
      content: `I am honored to share with you the certificates I have earned and the websites where I share my knowledge throughout my education. By participating in various educational programs, I have obtained many valuable certificates and I share this accumulated knowledge on my websites and blogs. You can visit these platforms to benefit from my knowledge and experiences and share your thoughts with me.`,

    },
  },
};
