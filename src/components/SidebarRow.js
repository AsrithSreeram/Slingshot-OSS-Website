import React from 'react'
import './SidebarRow.css'

function SidebarRow({ selected, title }) {
    return (
        <div className = {`sidebarRow ${selected && 'selected'}`}>
            <h2 className="sidebarRow_title"> {title} </h2>
        </div>
    )
}

export default SidebarRow
