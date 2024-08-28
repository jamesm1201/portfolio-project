import phoneImg from './assets/braille-electronics.jpg'
import westHam from './assets/west-ham-united.png'
import saxonVr from './assets/saxon-vr.jpg'

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
      description: 'Phone case with Refreshable Braille display.'
    },
    {
      image: saxonVr,
      title: 'Virtual Reality Simulations',
      description: 'Worked on multiple VR simulations of historic sites including a Roman Villa and a Medieval house in Salisbury'
    },
    {
      image: westHam,
      title: 'Dream Renewables Web App',
      description: 'React frontend with Strapi CMS implementation. Heroku server and DB with AWS S3 bucket for image hosting.'
    },
    {
      image: westHam,
      title: '3D Model Viewing Web App',
      description: 'Frontend for Bloomberg London HQ, Sketchfab API implemented to show 3D scans of the Mithraeum temple'
    },
    {
      image: westHam,
      title: 'Bespoke C# .Net API',
      description: 'API with Azure Data Studio hosted DataBase, communication implemented through Dapper library'
    }
  ];