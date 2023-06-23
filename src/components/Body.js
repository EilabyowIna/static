import leaves from '../assets/bg-leaves.svg'
import leavesone from '../assets/bg-decals.svg'
import './Body.css'
import appstore from '../assets/aapp.webp'
import playstore from '../assets/pp.png'
import disc from '../assets/product-search.svg'
import aug from '../assets/product-smartphone.svg'
import work from '../assets/product-work.svg'
import lar from '../assets/badge.laravel-mix.svg'
import glass from '../assets/badge.how-to-read-code.svg'



const Body = () => {
    return (
        <div className="container">
            

            <div className="hero">
                <header>
                    Protoapp
                </header>
                <h3 className="desc">
                    Our landing page template works on all  devices, so you only have to set it up once, and get beautiful results forever.
                </h3>
                <button className="button">
                    Get Started
                </button>
            </div>

            <div className="leavesone">
                <img src={leavesone}></img>
            </div>
            

            <div className="stores">
                <img src={playstore} class="play"></img>
                <img src={appstore} class="app"></img>
            </div>

            <div className="meet">
                <div class="protoapp">
                    <header>Meet Protoapp</header>
                    <h2>The app lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual representation.</h2>
                </div>
                <div className="discover">
                    <div className="divT">
                        <h1>Discover</h1>
                        <h3>Get information on using these guidelines whenever you are using therefore they have the same style and quality</h3>
                    </div>
                    <img src={disc}></img>
                </div>
                <div className="aug">
                <img src={aug}></img>
                <div className="divA">
                        <h1>Augmented</h1>
                        <h3>Word salad often arouses curiousity due to its seemingly intelligent and tasteful play on words</h3>
                    </div>
                
                </div>

                <div className="end"> 
                <div className="divE">
                        <h1>Endless</h1>
                        <h1>Possibilities</h1>
                        <h3>Management Systems shouldnt be a bore. Run out of words? heres some lorem ipsum ipsum dolor sit amet</h3>
                    </div>
                <img src={work}></img>
                </div>
            </div>

            <div className="colored">
                <div className="deep">
                    <div className="text">
                    <header className="head">Deep dive. Ready?</header>
                    <h3 className="three">So are we. Unless. You're. Not. Word filler.</h3>
                    <div className="storess">
                    <img src={playstore} className="play one"></img>
                    <img src={appstore} className="play two"></img>
                    </div>
                    </div>

                    
                    
                    
                </div>
            </div>

            <div className="last">
                <div className="textt">
                    <header>Last call to Action</header>
                    <h3 className="texttt">Another section content goes here</h3>
                </div>
                <div className="card">
                <div className="laravel">
                <img src={lar} className="play"></img>
                </div>
                 <div className="glasses">
                <img src={glass} className="play"></img>
                </div>
                </div>
            </div>
        </div>
        

    )
};

export default Body;