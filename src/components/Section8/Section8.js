import { ButtonFull } from "../Button/ButtonFull";

export const Section8 = () => {
    return (
        <>
            <div className="flex justify-between container mx-auto py-[120px] items-center">
                <div className="">
                    <div className="font-[800] text-[36px] text-dark">Save time with Horizon. </div>
                    <div className="font-[600] text-[36px] text-dark ">Turn your visitors into clients.</div>
                </div>
                <div className="flex gap-[16px] h-[56px]">
                    <div className="font-[700] text-[14px] flex items-center px-[28px] rounded-[12px] border-[1px] border-primary">Try Demo</div>
                    <ButtonFull desc="Get Started Now"/>
                </div>
            </div>
        </>
    );
}