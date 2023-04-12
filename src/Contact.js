import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.jpg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for work. Connect with me via:</p>
                           <p className="hire__text white">Phone:<strong> +2547 41 876 222</strong> </p>
                           <p className="hire__text white">Email: <strong> otienotilen@gmail.com</strong></p>
                           <p className="hire__text white">LinkedIn:<strong> otienotilen</strong> </p>
                           <p className="hire__text white">Github:<strong> otienotilen</strong> </p>
                        </div>
                        
                    </div>
                </div>
                {/* <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div> */}
            </div>
        </div>
    )
}

export default Contact
