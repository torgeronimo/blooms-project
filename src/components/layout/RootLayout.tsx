import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Nav from "./Nav"

const RootLayout = () => {
    return (
        <div className="app-container max-w-7xl mx-auto md:px-10 sm:px-5 px-4">
            <Nav/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout
