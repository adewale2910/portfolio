import {FaReact} from 'react-icons/fa'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {IoLogoHtml5, IoLogoCss3} from 'react-icons/io'
import {TbBrandJavascript} from 'react-icons/tb'
import {BsBootstrap, BsGit} from 'react-icons/bs'


export const skills = [
    {
      icon: <BsGit className='ms-2'/>,
      title: "Git & Github",
    },
    {
      icon: <i><BiLogoTailwindCss size={34}  className='ms-2'/></i>,
      title: "Tailwind Css",
    },
    {
      icon: <i><FaReact/></i>,
      title: "React Js",
    },
    {
      icon: <i><IoLogoHtml5/></i>,
      title: "HTML 5",
    },
  
    {
      icon: <i><IoLogoCss3/></i>,
      title: "CSS 3",
    },
  
    {
      icon: <i><TbBrandJavascript/></i>,
      title: "JavaScript",
    },
  
    {
      icon: <i><BsBootstrap className='ms-1'/></i>,
      title: "Bootstrap",
    },
  
  ];

