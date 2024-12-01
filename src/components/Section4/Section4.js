import section4 from '../../assets/images/section4.jpg'
import { Section4Item } from './Section4Item';
export const Section4 = () => {
    return (
        <>
            <div className="container mx-auto flex justify-between gap-[110px] py-[120px] items-center">
                <div className="">
                    <div className="">
                        <h2 className="font-[800] text-[30px] text-dark mb-[10px]">Boost your workflow with Horizon</h2>
                        <p className="font-[500] text-[16px] text-light mb-[60px]">Urna duis convallis convallis tellus interdum velit laoreet pentesque aliquam tortor consequat porta.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-x-[40px] gap-y-[60px]'>
                        <Section4Item infor="300+" title="Successful Projects" desc="Urna duis convallis convallis tellus interdum velit laoreet." />
                        <Section4Item infor="$10m" title="Annual Percentage Rate" desc="Urna duis convallis convallis tellus interdum velit laoreet." />
                        <Section4Item infor="2.8k+" title="Clients Worldwide" desc="Urna duis convallis convallis tellus interdum velit laoreet." />
                        <Section4Item infor="7000+" title="Daily Visits" desc="Urna duis convallis convallis tellus interdum velit laoreet." />
                    </div>
                </div>
                <div className="w-[715px] h-[504px] overflow-hidden rounded-[16px]">
                    <img src={section4} alt="" className='w-[100%] h-[100%] object-cover'/>
                </div>
            </div>
        </>
    );
}