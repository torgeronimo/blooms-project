const Carousel = () => {
    const images = [
        'https://images.unsplash.com/photo-1617176756162-447320192d98?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1627236418876-ef8689d94241?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1644248423203-80e317d78aee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1646754394626-705a8680889e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1676068243733-df1880c2aef8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1617176756162-447320192d98?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1627236418876-ef8689d94241?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1644248423203-80e317d78aee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1646754394626-705a8680889e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1676068243733-df1880c2aef8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        
        
        
    ];
    return(
        // <div className="carousel flex justify-center items-center pb-[75px]">
        //     <div className="w-full overflow-hidden">
        //         <div className="image-container flex gap-[20px] overflow-x-auto py-[20px] px-[10px] scroll-smooth">
        //         {images.map((image, index) => (
        //             <img 
        //                 key={index} 
        //                 src={image} 
        //                 alt={`Slide ${index + 1}`} 
        //                 className="h-[300px] w-[300px] shrink-0 rounded-[30px] object-cover"
        //             />))}
        //         </div>
        //     </div>
            
        // </div>

        <div className="slider h-full pb-[75px]">
            <div className="slide-track gap-4 h-full flex items-center">
                {images.map((image, index) => (
                    <div className="slide">
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Slide ${index + 1}`} 
                        className="h-[300px] w-[300px] shrink-0 rounded-[30px] object-cover"
                    />
                    </div>))}
            </div>
            
        </div>
    )
}

export default Carousel