
export const Section7Item = (props) => {
    const {review, img, title, desc} = props;
    return (
        <>
            <div className="px-[32px] py-[32px] bg-[#F6F8FD] rounded-[16px] flex flex-col items-center">
                <div className="font-[700] text-[20px] text-dark text-center">{review}</div>
                <div className="mt-[37px] w-[40px] h-[40px] overflow-hidden mb-[16px]">
                    <img src={img} alt="" className="w-[100%] h-[100%] object-cover rounded-[50%]"/>
                </div>
                <h3 className="font-[800] text-[18px] text-dark ">{title}</h3>
                <p className="font-[600] text-[12px] text-light ">{desc}</p>
            </div>
        </>
    );
}