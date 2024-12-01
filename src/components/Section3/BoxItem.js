export const BoxItem = (props) => {
    const {icon, title, desc} = props;
    return (
        <div className="px-[40px] flex flex-col items-center">
            <div className="text-[24px] px-[20px] py-[20px] bg-primary rounded-[16px]">{icon}</div>
            <h3 className="mt-[24px] mb-[8px] font-[800] text-[24px] text-dark">{title}</h3>
            <p className=" font-[500] text-[16px] text-light text-center">{desc}</p>
        </div>
    );
}