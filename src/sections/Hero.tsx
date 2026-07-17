import heroImage from '../assets/hero-flower.png'
import logo from '../assets/Logo.png'
import sticker from '../assets/Sticker.png'

const Hero = () => {
    return (
        <div className='hero-wrapper flex flex-col items-center gap-[40px] py-[100px]'>
            <img src={logo} alt="Logo" />
            <div className='img-wrapper relative'>
                <img src={heroImage} height="570" width="1120" alt="Hero Image" className='h-[570px] w-[1120px] p-[10px] heroimg' />
                <img src={sticker} alt="Sticker" className='absolute bottom-0 left-0 py-5 px-5' />
            </div>
            
        </div>
        
    )
}

export default Hero
