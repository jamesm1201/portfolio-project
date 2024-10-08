import phoneImg from './assets/braille-case.jpg'
import westHam from './assets/west-ham-united.png'
import saxonVr from './assets/saxon-vr.jpg'
import dreamImg from './assets/dream-renewables.png'
import mithImg from './assets/mithraeum.jpg'

export const EXAMPLES = {
    frontend: {
      title: "Frontend",
      description:
        "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    },
    backend: {
      title: "Backend",
      description:
        "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    },
    gameDevelopment: {
      title: "Game Development",
      description:
        "Components accept arbitrary inputs called props. They are like function arguments.",
    },
    embeddedSystems: {
      title: "Embedded Systems",
      description:
        "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    },
  };

  export const LOCATIONS =[
    {
      title: 'Thailand',
      description: 'Thailand was an incredible start to the trip, highlights of songkran, elephants and islands'
    },
    {
      title: 'Vietnam',
      description: 'Vietnam is a country of variety. Highlights of Ha Giang, Quadbikes on dunes and War history'
    },
    {
      title: 'Laos',
      description: 'Laos was a truly lovely country, we entered on longboat down the Mekong river over 2 days'
    }
  ];

  export const PROJECTSCAROUSEL = [
    {
      image: phoneImg,
      title: 'Braille Phone Case',
    },
    {
      image: saxonVr,
      title: 'Virtual Reality Simulations',
    },
    {
      image: dreamImg,
      title: 'Dream Renewables Web App',
    },
    {
      image: mithImg,
      title: '3D Model Viewing Web App',
    },
    {
      image: westHam,
      title: 'Bespoke C# .Net API',
    }
  ];