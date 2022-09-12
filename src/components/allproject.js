import portfolio11 from "../images/project/fab1.png";
import portfolio12 from "../images/project/fab2.png";
import portfolio13 from "../images/project/fab3.png";
import portfolio21 from "../images/project/q1.png";
import portfolio22 from "../images/project/q2.png";
import portfolio31 from "../images/project/b1.png";
import portfolio32 from "../images/project/b2.png";
import portfolio41 from "../images/project/gen1.png";
import portfolio42 from "../images/project/gen2.png";
const projects = [
    {
        name: "Fabex",
        type: "Web App",
        images: [portfolio11, portfolio12, portfolio13],
        client: "Fabex",
        url: "https://fabex.io",
        description: "A website designed to let you buy and sell different kinds of giftcards and cryptocurrencies. It also shows live prices of five famous cryptocurrencies.",
        contribution: "As a fullstack developer, I was responsible for the development of the whole website and its deployment. The website also has admin panel for the management of the website. For the frontend development, I used HTML, CSS, Bootstrap, and Typescript while the backend code was written in PHP with a MySQL database. The website was deployed to a shared hosting platform as requested."
    },
    {
        name: "Ecommerce Website",
        type: "Web App",
        images: [portfolio21, portfolio22],
        client: "Personal Project",
        url: "https://qshop-frontend.herokuapp.com",
        description: "An ecommerce website just like jumia for buying and selling of different kinds of goods.",
        contribution: "This is a personal project i did to showcase my knowledge of react library and spring framework. The website features oauth authentication for both Google and Facebook, Paypal payment api, Amazon S3, MySQL database, and more. The website was deployed to heroku"
    },
    {
        name: "GeneralFalad",
        type: "Web App",
        images: [portfolio41, portfolio42],
        client: "GeneralFalad",
        url: "https://www.generalfalad.com",
        description: "A website for easy payment of airtime, data and utility bills. Convert airtime to cash in Nigeria, Make payment with airtime, Send and receive payment in Nigeria with airtime",
        contribution: "I was in charge of maintaining the website for 7+ months. During my time, I was tasked with adding new features (e.g transferring fund between users, new payment system with Paystack API, and more) to the website and fixing bugs."
    },
    {
        name: "Bank & Countries API",
        type: "API",
        images: [portfolio31, portfolio32],
        client: "Personal Project",
        url: "http://api-env.eba-irpspqyp.us-east-1.elasticbeanstalk.com/country/all",
        description: "A REST Api for all the countries in the world and all the local banks in Nigeria",
        contribution: "Spring REST API with MySQL database and a react app for monitoring the api with the help of spring actuator."
    }
]

export default projects;