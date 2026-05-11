import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Gallery from './pages/Gallery'
import About from './pages/About'
import RootLayout from './components/layout/RootLayout.tsx'
import ContactUs from './pages/ContactUs.tsx'
import Home from './pages/Home.tsx'
import './styles.css'


const router = createBrowserRouter([
  {
      path: "/",
      element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "/gallery",
            element: <Gallery />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <ContactUs />
          },
      ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
