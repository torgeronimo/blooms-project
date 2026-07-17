import Button from '../components/ui/Button'

const WhoWeAre = () => {
    return (
        <div className='who-we-are-wrapper flex flex-col justify-center items-center gap[40px] max-w-[720px] mx-auto text-center py-[100px]'>
            <p className='caption1 pb-[20px] text-(--caption)'>WHO WE ARE</p>
            <h1 className='heading2 pb-[40px]'>We're Our Blooms® and we're here to help you find your floral story.</h1>
            <Button  href="/About" text="ABOUT US"></Button>
        </div>
    )
}

export default WhoWeAre
