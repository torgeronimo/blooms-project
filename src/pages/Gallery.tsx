import CTA from "../sections/CTA"

const Gallery = () => {
    const products = [
        {
            caption: "DAWN BLOOM",
            price: "$55/Bunch",
            src: "https://images.unsplash.com/photo-1618667066353-06982fc2ea72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "White tulip bouquet"
        },
        {
            caption: "SUNRISE BLOOM",
            price: "$65/Bunch",
            src: "https://images.unsplash.com/photo-1502089418555-ebcba08cb377?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Pink floral bloom"
        },
        {
            caption: "MORNING BLOOM",
            price: "$60/Bunch",
            src: "https://images.unsplash.com/photo-1615752623037-960fdf166ad6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Peony arrangement"
        },
        {
            caption: "DAYLIGHT BLOOM",
            price: "$70/Bunch",
            src: "https://images.unsplash.com/photo-1644248423203-80e317d78aee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Garden flower bouquet"
        },
        {
            caption: "SPRING BLOOM",
            price: "$50/Bunch",
            src: "https://images.unsplash.com/photo-1575178114667-c8a832c61f45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Spring floral display"
        },
        {
            caption: "SUMMER BLOOM",
            price: "$60/Bunch",
            src: "https://images.unsplash.com/photo-1646754394626-705a8680889e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Summer bouquet"
        },
        {
            caption: "AFTERNOON BLOOM",
            price: "$55/Bunch",
            src: "https://images.unsplash.com/photo-1557926005-012bd4382a0d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Floral table arrangement"
        },
        {
            caption: "DAWN BLOOM",
            price: "$55/Bunch",
            src: "https://images.unsplash.com/photo-1618667066353-06982fc2ea72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "White tulip bouquet"
        },

    ];

    const services = [
        {
            heading: "FLORAL INNSTALLATION",
            description: "We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.",
            img: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Floral installation for an event"
        },
        {
            heading: "NATIVE PLANT ARRANGEMENT",
            description: "Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.",
            img: "https://images.unsplash.com/photo-1608656218680-e8be81ce71d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Native plant arrangement in a home"
        },
        {
            heading: "CUSTOM FLORAL CONCEPTS",
            description: "Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.",
            img: "https://images.unsplash.com/photo-1617176756162-447320192d98?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Custom floral concept for a commercial space"
        },

    ];

    return (
        <>
            <h1 className="heading1 py-20">Gallery</h1>
            <div className="gallery-wrapper grid grid-cols-1 md:grid-cols-6 gap-8">
                <div className="gallery-header col-span-1">
                    <h2 className="caption1 text-(--caption)">SEASONAL <br className="hidden md:block"></br>ARRANGEMENT</h2>
                </div>

                {/* using grid */}
                {/* <div className="product-grid md:col-span-5 sm:col-span-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-[20px] gap-y-[60px] border-red-400 border">
                    {products.map((product, index) => (
                        <div key={index} className="items-wrapper gap-4">
                            <div className="product-details flex gap-2 items-center pb-4">
                                <p className="caption2">{product.caption}</p>
                                <p className="heading4 text-(--caption)">{product.price}</p>
                            </div>
                            <img
                                src={product.src}
                                alt={product.alt}
                                className="aspect-square object-cover rounded-[30px] h-[330px] sm:w-[320px] w-full"
                            />
                        </div>
                    ))}
                </div> */}
                <div className="product-grid md:col-span-5 sm:col-span-2 flex flex-wrap gap-x-[20px] gap-y-[60px]">
            {products.map((product, index) => (
                <div 
                            key={index} 
                            className="items-wrapper flex flex-col gap-4 grow shrink-0 basis-full sm:basis-[calc(50%-10px)] md:basis-[calc(33.333%-14px)]"
                        >
                            <div className="product-details flex gap-2 items-center pb-4">
                                <p className="caption2">{product.caption}</p>
                                <p className="heading4 text-(--caption)">{product.price}</p>
                            </div>
                            <img
                                src={product.src}
                                alt={product.alt}
                                className="aspect-square object-cover rounded-[30px] w-full h-[330px]"
                            />
                    </div>
                ))}
            </div>
            </div>
            <div className="service-wrapper grid md:grid-cols-6 grid-cols-1 pt-25">
                <p className="caption1 text-(--caption) col-span-1">Services</p>
                <div className="flex gap-4 col-span-5">
                    <div className="service-list gap-10 flex flex-col">
                        {services.map((service, index)=>(
                            <div key={index} className="service-item grid md:grid-cols-2 gap-4 w-full border-t border-(--divider) py-7.5">
                            <div className="service-desc">
                                <p className="heading1">{service.heading}</p>
                                <p className="paragraph1 text-(--caption)">{service.description}</p>
                            </div>
                            <img src={service.img} alt={service.alt} className="object-cover rounded-[30px] w-full h-[420px]"/>
                        </div>
                        ))}
                        
                    </div>
                    
                </div>
            </div>
            <CTA />
            
        </>
    )
}

export default Gallery
