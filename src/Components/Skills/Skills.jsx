import "../Skills/Skills.scss"
import { SiRedux } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiResponsive,
} from "react-icons/di";


export default function Skills (){
    return(
        <>
        <section className="skillsSection">
        <div className="skillsWrappper">
        <h2 className="text-center MySkills">My Skills</h2>
        </div>

       <div className="imgWrapper">
        <p><SiRedux/></p>
        <p><DiJavascript1/></p>
        <p><DiHtml5/></p>
        <p><DiReact/></p>
        <p><DiCss3/></p>
        <p><DiBootstrap/></p>
        <p><DiResponsive/></p>
       </div>
        </section>
         

          

        </>
    )
}




