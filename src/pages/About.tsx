import Button from "../components/ui/Button"

const About = () => {

    return (
        <>
        <h1 className="heading1 py-20">ABOUT</h1>
        <div className="about-wrapper">
            <div className="about-content grid md:grid-cols-6 grid-cols-1">
                <span className="col-span-1 caption1">OUR STORY.</span>
                <div className="right-content col-span-5">
                    <div className="right-wrapper flex flex-col gap-[70px]  pb-25">
                        <div className="owner flex gap-4">
                            <img className="w-[315px] h-[355px] object-cover rounded-[30px]" src="https://images.unsplash.com/photo-1593011951342-8426e949371f?q=80&w=676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            <div className="details">
                                <p className="caption2">Lily Smith</p>
                                <p className="heading4 text-(--caption)">Owner</p>
                            </div>
                        </div>
                        <div className="story">
                            <p className="heading2">Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.</p>
                        </div>
                        <div className="gap-5 grid md:grid-cols-3 grid-cols-1">
                            <img className="col-span-1 w-full h-[400px] object-cover rounded-[30px]" src="https://images.unsplash.com/photo-1575178114667-c8a832c61f45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            <img className="col-span-1 w-full h-[400px] object-cover rounded-[30px]" src="https://images.unsplash.com/photo-1557926005-012bd4382a0d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            <img className="col-span-1 w-full h-[400px] object-cover rounded-[30px]" src="https://images.unsplash.com/photo-1627236418876-ef8689d94241?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        </div>
                        
                        <p className="paragraph2 inline-[600px]">
                            Lily’s journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil.
                            <br></br><br></br>
                            Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.
                        </p>
                        
                        <img className="w-full h-[400px] object-cover rounded-[30px]" src="https://plus.unsplash.com/premium_photo-1678836292802-56a2df9e05ab?q=80&w=662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        <p className="paragraph2 inline-[600px]">
                                From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality.
                                <br></br><br></br>
                                Discover how we can add a touch of natural beauty to your next event.
                        </p>
                        <Button href="/Contact" text="BOOK A CONSULTATION"></Button>
                    </div>
                    
                </div>
            </div>
            
        </div>
        </>
        
    )
}

export default About
