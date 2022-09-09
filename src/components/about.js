import profile from "../images/profile.png";
const About = () => {
    return ( 
        <>
             <section id="About" class="about">
                <div class="about-container">
                <img src={profile} alt="profile"/>
                <div class="about-content">
                    <h2 class="heading-secondary">About me</h2>
                    <p class="text-paragraph-16">I'm Ronny. I love connecting with people and learning. I am a fulltime freelancer
                    </p>
                    <p class="text-paragraph-16">I'm a digital product designer focusing on crafting user experiences and design
                    systems for software, web, and mobile products.</p>
                    <p class="text-paragraph-16">Contact me for freelance/contract work, consulting, or if you want to chat! I'd be
                    happy to hear from you.</p>
                </div>
                </div>
            </section>
        </>
     );
}
 
export default About;