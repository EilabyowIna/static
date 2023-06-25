import './footer.css'
import logo from '../assets/logo1.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='foot'>
                <img src={logo} className='logo'></img>
                <ul>
                    <li>
                        Protoapp
                    </li>
                    <li>
                        Camp One Inc. LLC
                    </li>
                    <li>
                        Que ad Lorem ipsum dolor sit amet, 
                    </li>
                    <li>
                        Que ad Lorem ipsum dolor sit amet, 
                    </li>
                </ul>

                
            </div>

            <p className='cop'>2019 Protoapp. Allrights reserved.</p>
        </div>
    )
};

export default Footer;