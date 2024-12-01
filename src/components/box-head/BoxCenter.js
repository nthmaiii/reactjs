export const BoxCenter = (props) => {
    const {title, desc} = props;
    return (
        <>
            <div className="flex flex-col gap-[10px] items-center w-[650px] mx-auto text-center">
                <h3 className="font-[800] text-[36px] text-dark">{title}</h3>
                <p className="font-[500] text-[16px] text-light">{desc}</p>
            </div>
        </>
    );
}