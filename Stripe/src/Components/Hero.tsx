import phoneImg from '../images/phone.svg';
import { useGlobalContext } from "../context";

const Hero : React.FC = () => {
    const {closeSubmenu}=  useGlobalContext();
    
    return (
        <section className="hero" onMouseOver={closeSubmenu}>
            <div className="hero-center">
                <article className='hero-info'>
                    <h1>Payment infrastructure for the internet</h1>
                    <p>
                        Millions of companies of all sizes—from startups to Fortune 500s—use
                        Stripe’s software and APIs to accept payments, send payouts, and
                        manage their businesses online.
                    </p>
                    <button className='btn'>Start Now</button>
                </article>
                <article className="hero-images">
                    <img src={phoneImg} alt="Phone" className='phone-img'/>
                </article>
            </div>
        </section>
    )
}

export default Hero;