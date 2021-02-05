import React from 'react';
import "./Sidebar.css";
import CreateIcon from "@material-ui/icons/Create";

import SidebarOption from "./SidebarOption";
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebar__header">
                    <div className="sidebar__info">

                        <h2>Open Discussion</h2>
                        <h3>  
                            Zilen Modi
                            {/* {user?.displayName} */}
                        </h3>
                    </div> 
                    <CreateIcon />
                </div>

                <hr />
                <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
                <hr />

                <SidebarOption Icon={AddIcon} addChannelOption title="Add channels"/>
                {/* <div className="Channels">
                    {channels.map(channel => (
                        <SidebarOption title = {channel.name} id={channel.id} />
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Sidebar
