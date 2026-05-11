const Footer = () => {
    return (
        <div className='footer-wrapper w-full h-[582px] p-[30px]'>
            <div className="footer-content flex flex-col  items-center justify-end gap-5 h-full gap-5">
                <p className="ob text-white">OB.</p>
                <div className="flex flex-inline justify-between w-full">
                    <p className="paragraph2 text-white">Miami, FL</p>
                    <a href="/Contact" className="paragraph2 text-white">Contact</a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
