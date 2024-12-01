import logo from '../../assets/images/logo.svg'
import { FaFacebookF, FaGithub} from "react-icons/fa";
import { CiTwitter, CiInstagram, CiLinkedin} from "react-icons/ci";
export const Footer = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col items-center gap-[32px] pb-[80px]">
                <img src={logo} alt="" className='h-[36px] w-[auto]'/>
                <nav className='flex flex-col items-center'>
                    <ul className='flex gap-[48px]'>
                        <li className='font-[500] text-[14px] text-light'>About</li>
                        <li className='font-[500] text-[14px] text-light'>Features</li>
                        <li className='font-[500] text-[14px] text-light'>log</li>
                        <li className='font-[500] text-[14px] text-light'>Resources</li>
                        <li className='font-[500] text-[14px] text-light'>Partners</li>
                        <li className='font-[500] text-[14px] text-light'>Help</li>
                        <li className='font-[500] text-[14px] text-light'>Terms</li>
                    </ul>
                    <ul className='flex gap-[48px] mt-[24px]'>
                        <li className='font-[500] text-[24px] text-light'><FaFacebookF /></li>
                        <li className='font-[500] text-[24px] text-light'><CiTwitter /></li>
                        <li className='font-[500] text-[24px] text-light'><FaGithub /></li>
                        <li className='font-[500] text-[26px] text-light'><CiInstagram /></li>
                        <li className='font-[500] text-[27px] text-light'><CiLinkedin /></li>
                    </ul>
                </nav>
                <div className='font-[500] text-[14px] text-light'>© 2024 28Tech. All rights reserved.</div>
            </div>
        </>
    );
}