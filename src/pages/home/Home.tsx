import Image from '/myself.png';
import CV from '/cv.pdf';
import { ReactTyped } from 'react-typed';

export const Home = () => {

    return (
        <section className="home section active" id="home">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello">Hello, my name is <span className="name">Khouas Amine</span></h3>
                        <h3 className="my-profession">I'm a<span> </span>
                            <ReactTyped
                                strings={[
                                    "Apps developer",
                                    "Web Apps Developer",
                                    "Mobile Apps Developer",
                                ]}
                                typeSpeed={100}
                                backSpeed={60}
                                loop
                            >
                                <span className='Typing' />
                            </ReactTyped>
                        </h3>
                        <p>I'm a Web/Mobile developer with a passion for crafting intuitive digital experiences that elevate user engagement and drive business success.</p>
                        <a href={CV} className="btn">Curriculum Vitae</a>
                    </div>
                    <div className="home-img padd-15">
                        <img src={Image} alt="image of myself" />
                    </div>
                </div>
            </div>
        </section>
    )
}
