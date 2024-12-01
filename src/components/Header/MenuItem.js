export const MenuItem = (props) => {
    const {link, content} = props;
    return (
        <>
            <a href={link}>
                <li className='font-[400] text-[14px] text-black'>{content}</li>
            </a>
        </>
    );
}