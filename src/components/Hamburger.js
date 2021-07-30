import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";

// import {
//   staggerText,
//   staggerReveal,
//   fadeInUp,
//   handleHover,
//   handleHoverExit,
//   handleCityReturn,
//   handleCity,
//   staggerRevealClose
// } from "./Animations";

// import dallas from "../images/dallas.webp";
// import austin from "../images/austin.webp";
// import newyork from "../images/newyork.webp";
// import sanfrancisco from "../images/sanfrancisco.webp";
// import beijing from "../images/beijing.webp";

// const cities = [
//   { name: "Dallas", image: dallas },
//   { name: "Austin", image: austin },
//   { name: "New York", image: newyork },
//   { name: "San Francisco", image: sanfrancisco },
//   { name: "Beijing", image: beijing }
// ];

// const Hamburger = ({ state }) => {
//   // Create varibles of our dom nodes
//   let menuLayer = useRef(null);
//   let reveal1 = useRef(null);
//   let reveal2 = useRef(null);
//   let cityBackground = useRef(null);
//   let line1 = useRef(null);
//   let line2 = useRef(null);
//   let line3 = useRef(null);
//   let info = useRef(null);

//   useEffect(() => {
//     // If the menu is open and we click the menu button to close it.
//     if (state.clicked === false) {
//       // If menu is closed and we want to open it.

//       staggerRevealClose(reveal2, reveal1);
//       // Set menu to display none
//       gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
//     } else if (
//       state.clicked === true ||
//       (state.clicked === true && state.initial === null)
//     ) {
//       // Set menu to display block
//       gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
//       //Allow menu to have height of 100%
//       gsap.to([reveal1, reveal2], {
//         duration: 0,
//         opacity: 1,
//         height: "100%"
//       });
//       staggerReveal(reveal1, reveal2);
//       fadeInUp(info);
//       staggerText(line1, line2, line3);
//     }
//   }, [state]);

//   return (
//     <div ref={el => (menuLayer = el)} className='hamburger-menu'>
//       <div
//         ref={el => (reveal1 = el)}
//         className='menu-secondary-background-color'></div>
//       <div ref={el => (reveal2 = el)} className='menu-layer'>
//         <div
//           ref={el => (cityBackground = el)}
//           className='menu-city-background'></div>
//         <div className='container'>
//           <div className='wrapper'>
//             <div className='menu-links'>
//               <nav>
//                 <ul>
//                   <li>
//                     <Link
//                       onMouseEnter={e => handleHover(e)}
//                       onMouseOut={e => handleHoverExit(e)}
//                       ref={el => (line1 = el)}
//                       to='/opportunities'>
//                       Opportunities
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       onMouseEnter={e => handleHover(e)}
//                       onMouseOut={e => handleHoverExit(e)}
//                       ref={el => (line2 = el)}
//                       to='/solutions'>
//                       Solutions
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       onMouseEnter={e => handleHover(e)}
//                       onMouseOut={e => handleHoverExit(e)}
//                       ref={el => (line3 = el)}
//                       to='/contact-us'>
//                       Contact us
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//               <div ref={el => (info = el)} className='info'>
//                 <h3>Our Promise</h3>
//                 <p>
//                   The passage experienced a surge in popularity during the 1960s
//                   when Letraset used it on their dry-transfer sheets, and again
//                   during the 90s as desktop publishers bundled the text with
//                   their software.
//                 </p>
//               </div>
//               <div className='locations'>
//                 Locations:
//                 {/* Returning the list of cities */}
//                 {cities.map(el => (
//                   <span
//                     key={el.name}
//                     onMouseEnter={() => handleCity(el.image, cityBackground)}
//                     onMouseOut={() => handleCityReturn(cityBackground)}>
//                     {el.name}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const cities=[
  {name:"dallas",image:dallas},
  {name:"austin",image:austin},
  {name:"newyork",image:newyork},
  {name:"sanfrancisco",image:sanfrancisco},
  {name:"beijing",image:beijing}
]

const Hamburger=({state})=>{
  let menu = useRef(null);
  useEffect(()=>{

    if(state.clicked===false){

      //menu is closed
      gsap.to([".menu-layer",".menu-secondary-background-color"],{
        duration:0.8,
        height:0,
        ease:"power3.inOut",
        stagger:{
          amount:0.07
        }

      });gsap.to(".hamburger-menu",{
        duration:1,
        css:{display:"none"}
      });
    }else if(state.clicked === true || (state.clicked===true && state.initial===null)){

      //menu is open

gsap.to(".hamburger-menu",{
  duration:0,
  css:{display:"block"}
});
gsap.to([".menu-layer",".menu-secondary-background-color"],{
  duration:0,
  opacity:1,
  height:"100%"
})
    staggerReveal(".menu-secondary-background-color",".menu-layer");
    infoReveal(".info");
    staggerText(".link1",".link2",".link3");
    }
  },[state]);

  const staggerReveal=(node1,node2)=>{
    gsap.from([node1,node2],{
      duration:0.8,
      height:0,
      transformOrigin:"right top",
      skewY:2,
      ease:"power3.inOut",
      stagger:{
        amount:0.1,
      }
    })
  }
  const staggerText=(node1,node2,node3)=>{
    gsap.from([node1,node2,node3],{
      duration:0.8,
      y:100,
      delay:0.1,
      height:0,
      ease:"power3.inOut",
      stagger:{
        amount:0.3,
      }
    })
  }
  const infoReveal=(node1)=>{
    gsap.from([node1],{
      y:60,
      duration:1,
      delay:0.2,
      opacity:0,
      ease:"power3.inOut"
    })
  }
  const imageInOverlay=(city)=>{
    gsap.to(".menu-city-background",{
      duration:0,
      background:`url(${city}) center center`,
    });gsap.to(".menu-city-background",{
      duration:0.4,
      opacity:1,
      ease:"power3.inOut"
    });
    gsap.from(".menu-city-background",{
      duration:0.4,
      skewY:1.5,
      transformOrigin:"right top",
    })
  }
  const imageOutOverlay=()=>{
  gsap.to(".menu-city-background",{
    duration:0,
    opacity:1,
    background:"red",
    ease:"power3.inOut"
  })
}
const onMouseHover=(e)=>{
  gsap.to(e.target,{
    duration:0.4,
    skewX:4,
    y:3,
    ease:"power3.inOut"
  })
};

const onMouseOut=(e)=>{
  gsap.to(e.target,{
    duration:0.4,
    skewX:0,
    y:-3,
    ease:"power3.inOut"
  })
};
  

  return(
     <div ref={(e)=>(menu = e)} className='hamburger-menu'>
        <div className='menu-secondary-background-color'></div>
          <div className='menu-layer'>
            <div className="menu-city-background"></div>
            <div className="container">
              <div className="wrapper">
                <div className="menu-links">
                  <nav>
                    <ul>
                      <li>
                        <Link className="link1 hover1" onMouseEnter={(e)=>onMouseHover(e)} onMouseOut={(e)=>{onMouseOut(e)}} to="/opportunities">Opportunities</Link>
                      </li>
                      <li>
                        <Link className="link2 hover2" onMouseEnter={(e)=>onMouseHover(e)} onMouseOut={(e)=>{onMouseOut(e)}} to="/solutions">solutions</Link>
                      </li>
                      <li>
                        <Link className="link3 hover3" onMouseEnter={(e)=>onMouseHover(e)} onMouseOut={(e)=>{onMouseOut(e)}} to="/contact-us">Opportunities</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="info">
                    <h3>Our Promise</h3>
                    <p>
                      asdf alsdkjf aosdjf alsdfj alskdfj asdjflakjsdlfja;osdkjf;alskdjf kajdflkasdlfkja;sldkfjoj ajsdofjasdj foa sdojalfoasifj pas als fdoiasjvipfajdjfj oansoj aosjdas 
                    </p>
                  </div>
                  <div className="locations">
                    Locations:
                    {cities.map((e)=>(
                      <span  key={e.name} onMouseEnter={()=>imageInOverlay(e.image)} onMouseOut={imageOutOverlay}>{e.name} </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
       
    
    </div>
)
}

export default Hamburger;
