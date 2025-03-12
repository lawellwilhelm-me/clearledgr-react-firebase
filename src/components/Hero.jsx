import heroImg from '../assets/images/hero.png'
import WaitlistForm from './WaitlistForm'


const Hero = ({ joinWaitlist }) => {
    return (
        <section className="hero wrapper wrapper-primary">
            <div className="value-proposition">
                <h1>
                    <span>Your Finance</span>
                    <span>Team's AI-Powered Workspace</span>
                </h1>
                <p>Automate, analyze, and advance your finance operations with intelligent agents.</p>
                <WaitlistForm joinWaitlist={joinWaitlist} />
            </div> 
            <figure>
                <img src={heroImg} alt="AI-Powered Financial automation illustration" />
            </figure>
        </section>
    )
}

export default Hero