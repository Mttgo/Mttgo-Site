import meImage from 'public/me.webp'

type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: typeof meImage;
};

const presentation: Presentation = {
  mail: "mattgarcoli@gmail.com",
  title: "Hi, I am Matteo 👋",
  profile: meImage,
  description: "Geek and self-proclaimed web developer",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/mttngo",
    },
    {
      label: "Bento",
      link: "https://bento.me/mttgo",
    },
    {
      label: "Github",
      link: "https://github.com/Mttgo",
    },
    {
      label: "BMAC",
      link: "https://www.buymeacoffee.com/mttgo",
    },
  ],
};

export default presentation;
