import { Outlet } from 'react-router-dom'
import DashHeader from './DasHeader'
import DashFooter from './DashFooter'

function DashLayout(){
    return (
        <>
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
            <DashFooter />
        </>
    )
}
export default DashLayout