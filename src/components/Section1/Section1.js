import imgLogo from '../../assets/images/section1.svg'
import imgMain from '../../assets/images/main.jpg'
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { ButtonFull } from '../Button/ButtonFull';
export const Section1 = () => {
    return (
        <>
            <div className="container flex mx-auto gap-[114px] justify-between items-center">
                <div className="flex flex-col justify-start w-[570px]">
                    <img src={imgLogo} alt="" className='h-[30px]'/>
                    <h1 className="font-[800] text-[60px] text-dark mt-[10px]" > Take your website to the next level with Horizon UI </h1>
                    <p className="text-[16px] font-[500] my-[24px] text-light">Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest, most responsive & trendiest dashboard is here. Seriously.</p>
                    <div className="flex items-center">
                        <ButtonFull desc="Get started now" />
                        <div className="flex px-[24px] py-[8px] gap-[6px] items-center font-[500] text-[14px]" ><MdOutlinePhoneEnabled /> Book a free call</div>
                    </div>
                </div>
                <div className="w-[456px] h-[640px] rounded-[20px] overflow-hidden">
                    <img src={imgMain} alt="" className='w-[100%] h-[100%] object-cover'/>
                </div>
            </div>
        </>
    );
}