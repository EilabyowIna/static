import './Appbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo1.svg'
import leaves from '../assets/bg-leaves.svg'

const Appbar = () => {
    return (
        
        <nav class="container">
           
            <div class="nav">
            <div class="logor">
                <img src={logo} alt="Logo" class="logorr"/> 
                <h1 class="app"> Protoapp</h1>
                <h2>Home</h2>
            </div>
            </div>
        </nav>
        
    )
};

export default Appbar;