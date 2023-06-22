import leaves from '../assets/bg-leaves.svg'
import leavesone from '../assets/bg-decals.svg'
import './Body.css'
import appstore from '../assets/aapp.webp'
import playstore from '../assets/pp.png'
import disc from '../assets/product-search.svg'

const Body = () => {
    return (
        <div class="container">
            <img src={leaves} class="body"></img>

            <div class="hero">
                <header>
                    Protoapp
                </header>
                <h3 class="desc">
                    Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                </h3>
                <button class="button">
                    Get Started
                </button>
            </div>

            <img src={leavesone} class="another"></img>

            <div class="stores">
                <img src={playstore} class="play"></img>
                <img src={appstore} class="app"></img>
            </div>

            <div class="meet">
                <div class="protoapp">
                    <header>Meet Protoapp</header>
                    <h2>The app lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual representation.</h2>
                </div>
                <div class="discover">
                    <div class="divT">
                        <h1>Discover</h1>
                        <h3>Get information on using these guidelines whenever you are using therefore they have the same style and quality</h3>
                    </div>
                    <img src={disc}></img>
                </div>
                <div class="aug"></div>
            </div>
        </div>
        

    )
};

export default Body;