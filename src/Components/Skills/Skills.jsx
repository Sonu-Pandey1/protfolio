import "../Skills/Skills.scss"
// import { SiRedux } from "react-icons/si";
// import {
//   DiJavascript1,
//   DiReact,
//   DiHtml5,
//   DiCss3,
//   DiBootstrap,
//   DiResponsive,
// } from "react-icons/di";


// export default function Skills (){
//     return(
//         <>
//         <section className="skillsSection">
//         <div className="skillsWrappper">
//         <h2 className="text-center MySkills mb-5">My Skills</h2>
//         </div>

//        <div className="imgWrapper d-flex flex-wrap justify-content-around">
//         <div className="skillIcon"><SiRedux className="sicon"/></div>
//         <div className="skillIcon"><DiJavascript1 className="sicon"/></div>
//         <div className="skillIcon"><DiHtml5 className="sicon"/></div>
//         <div className="skillIcon"><DiReact className="sicon"/></div>
//         <div className="skillIcon"><DiCss3 className="sicon"/></div>
//         <div className="skillIcon"><DiBootstrap className="sicon"/></div>
//         <div className="skillIcon"><DiResponsive className="sicon"/></div>
//        </div>
//         </section>




//         </>
//     )
// }


// import "../Exprences/exprences.scss"


export default function Skills() {
  return (
    <>
      <section id="skills" className="skillsSection">
        <div className="skillsWrappper">
          <h2 className="text-center MySkills mb-5">My <span className="titleColor">Skills</span></h2>
        </div>
        <div className="container d-flex justify-content-between">
          {/* <div className="row"> */}
            <div className="col">
              <div className="progress">
                <h3>HTML & CSS <span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Bootstrap <span className="skillSpan">70%</span> </h3>
                <div className="bar"><span></span></div>

              </div>
              <div className="progress">
                <h3>Javascript <span className="skillSpan">75%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>React Js <span className="skillSpan">80%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Redux <span className="skillSpan">60%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Redux-Toolkit <span className="skillSpan">70%</span> </h3>
                <div className="bar"><span></span></div>
              </div>
              {/* <div className="progress">
                        <h3>Next Js <span className="skillSpan">40%</span></h3>
                        <div className="bar"><span></span></div>
                    </div> */}
              {/* <div className="progress">
                        <h3>Tailwind Css <span className="skillSpan">55%</span> </h3>
                        <div className="bar"><span></span></div>
                    </div> */}
              {/* <div className="progress">
                        <h3>Metrial Ui <span className="skillSpan">60%</span> </h3>
                        <div className="bar"><span></span></div>
                    </div> */}
              <div className="progress">
                <h3>GitHub  <span className="skillSpan">50%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Vs Code <span className="skillSpan">85%</span> </h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Netlify <span className="skillSpan">70%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
            <div className="col">
              <div className="container skillRightDivParent ">
                <div className="skillsrightdiv">
                <h3>{'>>'} 10+</h3>
                    <p>Months of Personal Experience</p>
                </div>
                <div className="skillsrightdiv">
                <h3> {'>>'} 20+</h3>
                    <p>Happy Clients</p>
                </div>
                <div className="skillsrightdiv">
                <h3>{'>>'} 10+</h3>
                    <p>Projects Compeleted</p>
                </div>
                <div className="skillsrightdiv">
                <h3> {'>>'} 10+</h3>
                    <p>Hour Work Per Day</p>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>

    </>
  )
}




