import { BoxItem } from "./BoxItem";
import { GoGraph } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { LuUser } from "react-icons/lu";
export const Section3 = () => {
    return (
        <>
            <div className="container mx-auto grid grid-cols-3 gap-[8px] py-[120px]" >
                <BoxItem icon={<GoGraph />} title="Share team inboxes" desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone "/>
                <BoxItem icon={<MdOutlineEmail />} title="Analytics dashboard" desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone  "/>
                <BoxItem icon={<LuUser />} title="Deliver instant answer" desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone "/>
                
            </div>
        </>
    );
}