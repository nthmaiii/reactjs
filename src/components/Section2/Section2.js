import { MdOutlineMailOutline } from "react-icons/md";
import { BoxItem2 } from "./BoxItem2";
import { BoxCenter } from "../box-head/BoxCenter";
export const Section2 = () => {
    return (
        <>
            <div className="container mx-auto py-[120px]">
                <BoxCenter title="How Horizon works?" desc="Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum."/>
                <div className="grid grid-cols-3 gap-[40px] mt-[60px] ">
                    <BoxItem2 count2={1} title2="Create your Account" desc2="Condimentum vit pellemsque habitant morbi at molestie." />
                    <BoxItem2 count2={2} title2="Setup your Account" desc2="Condimentum vit pellemsque habitant morbi at molestie." />
                    <BoxItem2 count2={3} title2="Start creating with Horizon" desc2="Condimentum vit pellemsque habitant morbi at molestie." />
                </div>
            </div>
        </>
    );
}