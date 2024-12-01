export const BoxItem2 = (props) => {
    const {count2, title2, desc2} = props;
    return (
        <>
            <div className="flex gap-[18px]">
                <div className="self-start font-[700] text-[16px] py-[9px] px-[17px] bg-primary rounded-[50%]">{count2}</div>
                <div className="">
                    <h3 className="font-[700] text-[16px] text-dark">{title2}</h3>
                    <p className="font-500] text-[16px] text-light">{desc2}</p>
                </div>
            </div>
        </>
    );
}