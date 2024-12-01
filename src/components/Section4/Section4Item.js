export const Section4Item = (props) => {
    const {infor, title, desc} = props;
    return (
        <>
            <div className='flex flex-col gap-[2px]'>
                <div className='font-[800] text-[36px] text-dark'>{infor}</div>
                <h2 className='font-[700] text-[16px] text-dark'>{title}</h2>
                <div className='font-[500] text-[16px] text-light'>{desc}</div>
            </div>
        </>
    );
}