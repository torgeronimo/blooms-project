const WhatWeDo = () => {

    const images = [
        {
            first: "https://images.unsplash.com/photo-1494319988300-172cd182cb31?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Floral installation in a living room"
        },
        {
            second: "https://images.unsplash.com/photo-1628927122320-910a679f54b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Floral installation in a commercial space"
        },
        {
            third: "https://images.unsplash.com/photo-1628927124199-a8a2a5394392?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Floral installation for an event"
        },
        {
            filler:"https://images.unsplash.com/photo-1681823853101-9a0d7e8be47b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt:"Section Filler"
        }
    ];

    return (
        <div className='wwd-section'>
            <div className="flex flex-col items-center gap-[40px] border-b text-center border-(--primary)">
                    <h1 className='heading1'>WHAT WE DO</h1>
                    <p className='paragraph1 text-[var(--body1)] pb-[40px]'>We bring a touch of that simple magic into your world</p>
            </div>

                {/* Our Services */}
            <div className='section-wrapper flex flex-col items-center gap-[20px] px-[40px] py-[80px]'>
                <div className="step-container flex flex-col items-center gap-[80px] w-full text-center">
                    <h2 className="heading1">1</h2>
                    <img className="h-[145px] w-[145px] rounded-[30px]" src={images[0].first} alt={images[0].alt} />
                    <div className="step-desc flex flex-col items-center gap-[30px]">
                        <h3 className="heading1">FLORAL INSTALLATION</h3>
                        <p className="paragraph1 text-[var(--body1)] w-[540px] text-center">Living art for homes, business, and events.</p>
                    </div>
                    <span className="h-[1px] w-full bg-(--divider) rounded-2xl"></span>
                </div>
                <div className="step-container flex flex-col items-center gap-[80px] w-full text-center">
                    <h2 className="heading1">2</h2>
                    <img className="h-[145px] w-[145px] rounded-[30px]" src={images[1].second} alt={images[1].alt} />
                    <div className="step-desc flex flex-col items-center gap-[30px]">
                        <h3 className="heading1">NATIVE PLANT ARRANGEMENTS</h3>
                        <p className="paragraph1 text-[var(--body1)] w-[540px] text-center">Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
                    </div>
                    <span className="h-[1px] w-full bg-(--divider) rounded-2xl"></span>
                </div>
                <div className="step-container flex flex-col items-center gap-[80px] w-full text-center">
                    <h2 className="heading1">3</h2>
                    <img className="h-[145px] w-[145px] rounded-[30px]" src={images[2].third} alt={images[2].alt} />
                    <div className="step-desc flex flex-col items-center gap-[30px]">
                        <h3 className="heading1">CUSTOM FLORAL CONCEPTS</h3>
                        <p className="paragraph1 text-[var(--body1)] w-[540px] text-center">Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
                    </div>
                    <span className="h-[1px] w-full bg-(--divider) rounded-2xl"></span>
                </div>

                <div className="filler-img w-full flex justify-center items-center py-[40px]">
                    <img className="h-[750px] w-full rounded-[30px] object-cover" src={images[3].filler} alt={images[3].alt} />
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
