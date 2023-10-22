import codingImage from "../images/codingImage.png";
import "../styles/Pages.css"

const AboutMe = () => {
    return (
        <div>
            <div>
                <h1>About Me</h1>
            </div>

            <div className="aboutMe">
                <div className="aboutMeSection" id="aboutMeText">
                    
                    <p>Throughout my life I had always excelled at mathematics, it forever being one of my main interests. The versatility alone of having the freedom to enter almost any profession and be an essential addition to the team encouraged me to attend Aberystwyth University, from which I graduated with an upper second-class degree. Consistently searching for the most efficient methods and set of steps to solve problems allowed me to discover my love for algorithms.</p>
                    <p>An introduction into the world of data programming in university consisted of learning basic Python and RStudio skills for mathematical analysis in fields such as finite element analysis, which in turn has motivated me to pursue a career in this field. Being a hardworking, determined individual, I am consistently challenging myself by devoting my spare time towards widening my scope of skills in languages such as HTML, CSS and JavaScript.</p>
                </div>

                <img className="aboutMeSection" id="codingImage" src={codingImage} alt="Coding Image"/>
            </div>
        </div>
            
    )
}

export default AboutMe;


// /* about me section */
// h1 {
//     margin: 20px;
//     font-size: 22px;
// }

// p {
//     margin: 10px;
//     padding: 1rem;
//     font-size: 18px;
//     text-align: justify;
// }

// .aboutMe {
//     display: flex;
//     flex-wrap: nowrap;
// }

// .aboutMe .aboutMeSection {
//     width: 50%;
//     margin: 10px;
// }


// /* edit responsiveness */
// #codingImage {
//     width: 50%;
//     padding: 1rem;
//     object-fit: contain;
//     margin-right: 10px;
// }