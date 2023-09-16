import './Footer.css'
import { RiFacebookBoxFill, RiInstagramFill, RiYoutubeFill, RiLinkedinBoxFill, RiTwitterFill, RiAppleFill, RiAndroidFill } from "react-icons/ri";

const Footer = () => {
    const list_link = [
        {
            parteone:[
                {name: 'About Us',                 path: '#'},
                {name: 'Services',                 path: '#'},
                {name: 'Help & Support',           path: '#'},
            ]
        },
        {
            partetwo:[
                {name: 'Trust, Safety & Security',  path: '#'},
                {name: 'Terms of Service',          path: '#'},
                {name: 'Privacy Policy',            path: '#'},
            ]
        },
        {
            partethree:[
                {name: 'Help & Support',            path: '#'},
                {name: 'Cookie Settings',           path: '#'},
                {name: 'Career',                    path: '#'},
            ]
        },
    ]
    return(
        <footer className='footer container'>
            <div className='container'>
                <div className='list_link'>
                    <ul>
                        {list_link[0].parteone.map((info, index) => (
                            <li key={index}><a href={info.path}>{info.name}</a></li>
                        ))}
                    </ul>
                    <ul>
                        {list_link[1].partetwo.map((info, index) => (
                            <li key={index}><a href={info.path}>{info.name}</a></li>
                        ))}
                    </ul>
                    <ul>
                        {list_link[2].partethree.map((info, index) => (
                            <li key={index}><a href={info.path}>{info.name}</a></li>
                        ))}
                    </ul>
                </div>
                <div className='social_app'>
                    <div className='social icn'>
                        <p>Follow Us 
                            <span><RiFacebookBoxFill /></span>
                            <span><RiInstagramFill /></span>
                            <span><RiYoutubeFill /></span>
                            <span><RiLinkedinBoxFill /></span>
                            <span><RiTwitterFill /></span>
                        </p>
                    </div>
                    <div className='app icn'>
                        <p>Mobile app
                            <span><RiAppleFill /></span>
                            <span><RiAndroidFill /></span>
                        </p>
                    </div>
                </div>
                <hr/>
                <p className='copyright'>© 2023 Restuarant®, Designed By <a href='https://www.linkedin.com/in/yassineouchnid/' target='_blank' rel="noreferrer">Yassine OUCHNID</a>.</p>
            </div>
        </footer>
    )
}

export default Footer