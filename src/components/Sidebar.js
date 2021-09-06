import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'






function Sidebar() {
    return (
        <div className = "sidebar">
            <SidebarRow title = "September 5th, 2021"/>
            <SidebarRow title = "August 29th, 2021"/>
            <SidebarRow title = "August 22, 2021"/>
            <SidebarRow title = "August 15, 2021"/>
            <SidebarRow title = "August 8th, 2021"/>
            <SidebarRow title = "August 1st, 2021"/>
            <SidebarRow title = "July 25th, 2021"/>
            <SidebarRow title = "July 18th, 2021"/>
            <SidebarRow title = "July 11th, 2021"/>
            <hr />

        </div>
    )
}

export default Sidebar
