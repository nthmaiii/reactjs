import { BoxCenter } from "../box-head/BoxCenter";
import user1 from '../../assets/images/user1.jpg';
import { Section7Item } from "./Section7Item";
export const Section7 = () => {
    return (
        <>
            <div className="container mx-auto  py-[120px]">
                <BoxCenter title="Customer Testimonials" desc="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."/>
                <div className="grid gap-[18px] grid-cols-2 mt-[74px]">
                    <Section7Item review="A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming." img={user1} title="Tiana Schleifer" desc="CEO & Founder"/>
                    <Section7Item review="A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming." img={user1} title="Tiana Schleifer" desc="CEO & Founder"/>
                </div>
            </div>
        </>
    );
}