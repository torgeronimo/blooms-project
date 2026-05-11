import Button from '../components/ui/Button'
const CTA = () => {
    return (
        <div className='wrapper flex flex-col items-center justify-center gap-10 py-25 w-full h-150'>
            <div className='flex flex-col items-center justify-center gap-5 text-center'>
                <p className='caption1 text-(--body1)'>WORK WITH US</p>
                <h1 className='heading2 inline-[300px] md:inline-[700px]'>Discover how we can add a touch of natural beauty to your next event.</h1>
                
            </div>
            <Button href="/About" text="ABOUT US"></Button>
        </div>
    )
}

export default CTA
