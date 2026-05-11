interface ButtonProps{
    text:string;
    href?:string;
}




const Button = ({text, href ="#"}:ButtonProps) => {
    return (
        <div>
            <a href={href} className="bg-(--accent) h-[110px] w-[20px] text-(--body1) px-3 py-1.5 rounded-md hover:bg-(--caption-hover) hover:border transition-colors duration-300 caption1">
                <span className="mr-2">•</span>{text}
            </a>
        </div>
    )
}

export default Button
