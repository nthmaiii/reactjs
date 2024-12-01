import logo from '../../assets/images/logo.svg';
import { MenuItem } from './MenuItem';
export const Header = () => {
    return (
        <>
            <header className='container mx-auto py-[26px] flex justify-between items-center'>
                <div className='h-[34px] w-auto'>
                    <img src={logo} alt="" />
                </div>
                <nav className=''>
                    <ul className='flex gap-[48px]  items-center'>
                        <MenuItem link="/" content="Product"/>
                        <MenuItem link="/" content="Featurest"/>
                        <MenuItem link="/" content="Prising"/>
                        <MenuItem link="/" content="Company"/>
                    </ul>
                </nav>
                <div className='flex gap-[20px] items-center'>
                    <div className='font-[400] text-[14px] text-black'>Log In</div>
                    <div className='font-[700] text-[14px] text-primary py-[8px] px-[16px] bg-[#E9E3FF] rounded-[10px]'>Sign Up</div>
                </div>
            </header>
        </>
    )
}