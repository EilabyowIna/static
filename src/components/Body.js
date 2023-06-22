import leaves from '../assets/bg-leaves.svg'
import leavesone from '../assets/bg-decals.svg'
import './Body.css'
import appstore from '../assets/aapp.webp'
import playstore from '../assets/pp.png'

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
        </div>
        

    )
};

export default Body;