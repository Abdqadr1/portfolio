import icon1 from "../images/icons/icon-1.png";
import icon2 from "../images/icons/icon-2.png";
import icon3 from "../images/icons/icon-3.png";
const Services = () => {
    return ( 
        <>
            <section id="Service" class="service">
                <div class="sub-heading">
                    <h2 class="heading-secondary">Services</h2>
                    </div>
                    <div class="service-container">
                    <div class="service-card">
                        <img src={icon1} alt=""/>
                        <h3 class="heading-tertiary">Mobile Application</h3>
                        <p class="text-paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique
                        ipsum.</p>
                    </div>
                    <div class="service-card">
                        <img src={icon2} alt=""/>
                        <h3 class="heading-tertiary">Web Application</h3>
                        <p class="text-paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique
                        ipsum.</p>
                    </div>
                    <div class="service-card">
                        <img src={icon3} alt=""/>
                        <h3 class="heading-tertiary">User Interface Design</h3>
                        <p class="text-paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique
                        ipsum.</p>
                    </div>
                    {/* <div class="service-card">
                        <img src={icon4} alt=""/>
                        <h3 class="heading-tertiary">Project Management</h3>
                        <p class="text-paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique
                        ipsum.</p>
                    </div>
                    <div class="service-card">
                        <img src={icon6} alt=""/>
                        <h3 class="heading-tertiary">Strategy and Branding</h3>
                        <p class="text-paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique
                        ipsum.</p>
                    </div>
                    <div class="service-card">
                        <img src={icon5} alt=""/>
                        <h3 class="heading-tertiary">Product Designing</h3>
                        <p class="text-paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique
                        ipsum.</p>
                    </div> */}
                </div>
            </section>

        </>
     );
}
 
export default Services;