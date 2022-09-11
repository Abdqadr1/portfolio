import { useEffect, useRef } from "react";
import profile from "../images/profile.png";
const About = () => {
    const aboutRef = useRef();
    useEffect(() => {
        if (aboutRef.current) {
            aboutRef.current.addEventListener("focus", e => {
                console.log("focus..");
            })
        }
    })
    return ( 
        <>
             <section id="About" className="about text-start">
                <div className="about-container">
                    <img src={profile} alt="profile" className="left-in" />
                    <div ref={aboutRef} className="about-content right-in" tabIndex="0">
                        <h2 className="heading-secondary">About me</h2>
                        <p className="text-paragraph-16">I'm Ronny. I love connecting with people and learning. I am a fulltime freelancer
                        </p>
                        <p className="text-paragraph-16">I'm a digital product designer focusing on crafting user experiences and design
                        systems for software, web, and mobile products.</p>
                        <p className="text-paragraph-16">Contact me for freelance/contract work, consulting, or if you want to chat! I'd be
                        happy to hear from you.</p>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default About;