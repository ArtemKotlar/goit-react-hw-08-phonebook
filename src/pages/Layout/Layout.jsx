import AppBAr from "components/AppBar/AppBar"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return(
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}> 
            <AppBAr/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </div>
    )
}