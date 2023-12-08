type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
  emojiImage?: string; // New field for the emoji image source
};

const presentation: Presentation = {
  mail: "mattgarcoli@gmail.com",
  title: "Hi, I am Matteo 👋",
  // profile: "/profile.webp",
  description: "Geek and self-proclaimed web developer",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
  emojiImage: "/workspaces/asdfgh/public/dffce0ce-50d1-4a75-b971-573775261528.jpg", // Add the path to your emoji image here
};

export default presentation;
