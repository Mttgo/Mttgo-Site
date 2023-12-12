import meImage from 'public/me.webp';

type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  profile?: string;
  description: string;
  socials: Social[];
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

// Function to manipulate the image frame
function manipulateImage(myImage: string) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const img = new Image();

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0);

    // Manipulate the image frame here
    // For example, draw a red rectangle at position (50, 50) with width 100 and height 80
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 80);

    // Get the manipulated image as a base64 string
    const manipulatedImage = canvas.toDataURL('image/png');

    // Log the manipulated image (you can perform further actions with this image)
    console.log(manipulatedImage);
  };

  img.src = myImage;
}

// Call the function with your image
manipulateImage(presentation.profile || '');
