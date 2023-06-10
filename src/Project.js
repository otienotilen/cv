import React from "react";
import "./Project.css";
import Project1 from './img/mediaadvertisingargency.png';
import Project2 from './img/admindashboard.png';
import Project3 from './img/portfoliowebsite.png';
import Project4 from './img/musicplayer.png';
import Project5 from './img/billingapp.png';
import Project6 from './img/healthcare.png';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">React website</h5>
                     <h4 className="project__text">Media Advetising agency</h4>
                     <a href="https://laphrica1.netlify.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">React website</h5>
                     <h4 className="project__text">BizMkononi Admin panel </h4>
                     <a href="https://bizmkonnoni-dashboard-react.netlify.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">React website</h5>
                     <h4 className="project__text">Portfolio website</h4>
                     <a href="https://cvtilen.netlify.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Java mobile app</h5>
                     <h4 className="project__text">Music Player</h4>
                     <a href="https://github.com/otienotilen/music-player" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Java mobile app</h5>
                     <h4 className="project__text">Recurrent Billing app</h4>
                     <a href="https://github.com/otienotilen/Billing-app" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Java mobile development</h5>
                     <h4 className="project__text">Doctors appointment app</h4>
                     <a href="https://github.com/otienotilen/doctors-appointment-app" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
               <a href="https://github.com/otienotilen">
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>
             </a>
           </div>
       </div>
    </div>
  );
}

export default Project;
