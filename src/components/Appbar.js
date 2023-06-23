import './Appbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo1.svg'
import leaves from '../assets/bg-leaves.svg'

const Appbar = () => {
    return (
        <nav className="container">
            <div className="body">
            <div className="nav">
            <div className="logor">
                <img src={logo} alt="Logo" className="logorr"/> 
                <h1 className="app"> Protoapp</h1>
                <h2>Home</h2>
            </div>
            </div>
            </div>
        </nav>
        
    )
};

export default Appbar;