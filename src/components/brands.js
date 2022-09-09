import Airbnb from "../images/brands/Airbnb.png";
import FedEx from "../images/brands/FedEx.png";
import Google from "../images/brands/Google.png";
import Hubspot from "../images/brands/Hubspot.png";
import Microsoft from "../images/brands/Microsoft.png";
import Walmart from "../images/brands/Walmart.png";
const Brands = () => {
    return ( 
        <>
            <section class="section-brands">
                <div class="brand-border"></div>
                <div class="brands">
                    <img src={Airbnb} alt=""/>
                    <img src={FedEx} alt=""/>
                    <img src={Google} alt=""/>
                    <img src={Hubspot} alt=""/>
                    <img src={Microsoft} alt=""/>
                    <img src={Walmart} alt=""/>
                </div>
                <div class="brand-border"></div>
            </section>
        </>
     );
}
 
export default Brands;