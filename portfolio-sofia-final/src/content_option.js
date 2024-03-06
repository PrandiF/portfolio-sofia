import {
  SiAdobephotoshop,
  SiMicrosoftexcel,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiMicrosoftpowerpoint,
  SiVisualstudio,
  SiBlender
} from "react-icons/si";

const logotext = "S.P";
const meta = {
  title: "Sofia Prandi",
  description: "Diseño Multimedial",
};

const introdata = {
  title: "Sofia Prandi",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop mobile apps",
  },
  description:
    'Soy estudiante de diseño multimedial en la Universidad "Da Vinci". Apasionada por la creatividad y el diseño, me esfuerzo por crear experiencias visuales impactantes y atractivas. ',
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "Conoceme un poco más",
  aboutme:
    "Soy una persona creativa e innovadora con capacidad para trabajar en equipo y con un gran poder de organización. Tengo 21 años y estoy inmersa en el aprendizaje del diseño digital pasando por diferentes áreas como el diseño gráfico, marketing, programación web, diseño 3D y edición de imagen y video. Mi objetivo principal es poner a prueba mis habilidades e incorporar nuevas aprendiendo de  mi entorno laboral, para así crecer como profesional.",
};
const worktimeline = [
  {
    jobtitle: "Atención al cliente",
    where: "Elementos Esenciales",
    date: "2022",
  },
  {
    jobtitle: "Secretaria",
    where: "Consultorio Médico",
    date: "2023",
  },
];

const hardSkills = [
  {
    name: "Ilustrator",
    icon: 90,
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop style={{width: "20px", height: "20px"}}/>,
  },
  {
    name: "Excel",
    icon: <SiMicrosoftexcel style={{width: "20px", height: "20px"}}/>,
  },
  {
    name: "After Effects",
    icon: <SiAdobeaftereffects style={{width: "20px", height: "20px"}}/>,
  },
  {
    name: "Premiere Pro Indesign",
    icon: <SiAdobepremierepro style={{width: "20px", height: "20px"}}/>,
  },
  {
    name: "Power Point",
    icon: <SiMicrosoftpowerpoint style={{width: "20px", height: "20px"}}/>,
  },
  {
    name: "Visual Studio Code",
    icon: <SiVisualstudio style={{width: "20px", height: "20px"}}/>,
  },
  {
    name: "Blender",
    icon: <SiBlender style={{width: "20px", height: "20px"}}/>,
  },
];
const softSkills = [
  {
    name: "Colaboración",
    value: 85,
  },

  {
    name: "Adaptación",
    value: 80,
  },
  {
    name: "Organización",
    value: 70,
  },
  {
    name: "Empatía",
    value: 85,
  },

  {
    name: "Creatividad",
    value: 90,
  },
  {
    name: "Positiva",
    value: 90,
  },
  {
    name: "Resolutiva",
    value: 75,
  },
];

const languages = [
  {
    language: "Inglés",
    level: "C1",
  },
  {
    language: "Portugués",
    level: "B1",
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },

  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/550/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "sofiaprandi60@gmail.com",
  YOUR_FONE: "(011)5049-6592",
  description:
    "¡Actualmente estoy buscando oportunidades laborales en el campo de Diseño Multimedial a tiempo completo! Si conoces alguna posición disponible, si tienes alguna pregunta, o simplemente quieres saludar, no dudes en ponerte en contacto conmigo ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "",
  instagram: "https://www.instagram.com/sofiprandi/",
  linkedin: "",
  twitter: "",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  hardSkills,
  softSkills,
  languages,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
