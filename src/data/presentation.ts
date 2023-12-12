import React from 'react';
import meImage from './public/me.webp';

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
};

const presentation: Presentation = {
  mail: "mattgarcoli@gmail.com",
  title: "Hi, I am Matteo 👋",
  profile: meImage,
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
};

const YourComponent: React.FC = () => {
  return (
    <div>
      {/* Other content */}
      <img
        src={presentation.profile}
        alt="Matteo's Image"
        style={{ width: '100%', height: 'auto', borderRadius: '0', border: 'none' }}
      />
      {/* Other content */}
    </div>
  );
};

export default YourComponent;
