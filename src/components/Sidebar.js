// import React, { useState } from 'react'; // Importing useState
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

// import LightModeIcon from '@mui/icons-material/LightMode';
// import NightlightIcon from '@mui/icons-material/Nightlight';
// import SearchIcon from '@mui/icons-material/Search';
// import { IconButton } from '@mui/material';
// import ConversationsItem from './ConversationsItem';

// import "./myStyles.css";

// function Sidebar() {
//     const [lightTheme,setLightTheme] =useState(true);
//     const [conversations, setConversations] = useState([
//         {
//             name: "test1",
//             lastMessage: "lm1",
//             timeStamp: "today",
//         },
//         {
//             name: "test2",
//             lastMessage: "lm2",
//             timeStamp: "today",
//         },
//         {
//             name: "test3",
//             lastMessage: "lm3",
//             timeStamp: "today",
//         }
//     ]);

//     return (
//         <div className="sidebar-container">
//             <div className="sb-header ">
//                 <div>
//                     <IconButton>
//                         <AccountCircleIcon />
//                     </IconButton>
//                 </div>
//                 <div>
//                     <IconButton>
//                         <PersonAddIcon />
//                     </IconButton>
//                     <IconButton>
//                         <GroupAddIcon />
//                     </IconButton>
//                     <IconButton>
//                         <AddCircleIcon />
//                     </IconButton>
//                     <IconButton onClick={() => {setLightTheme((prevValue) =>{
//                         return !prevValue;

//                     });
//                      }}
//                      >
//                         {lightTheme  &&   <NightlightIcon />}
//                         {!lightTheme && <LightModeIcon />}
//                     </IconButton>

//                 </div>
//             </div>
//             <div className="sb-search">
//                 <IconButton>
//                     <SearchIcon />
//                 </IconButton>
//                 <input placeholder='search' className="search-box"></input>
//             </div>
//             <div className="sb-conversations">
//                 {conversations.map((conversation) => { // Changed variable name to 'conversation'
//                     return <ConversationsItem key={conversation.name} {...conversation} /> // Spread conversation object as props
//                 })}
//             </div>
//         </div>
//     );
// }

// export default Sidebar;




import React, { useState } from 'react'; // Importing useState
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem';

import "./myStyles.css";

function Sidebar() {
    const [lightTheme,setLightTheme] =useState(true);
    const [conversations, setConversations] = useState([
        {
            name: "test1",
            lastMessage: "lm1",
            timeStamp: "today",
        },
        {
            name: "test2",
            lastMessage: "lm2",
            timeStamp: "today",
        },
        {
            name: "test3",
            lastMessage: "lm3",
            timeStamp: "today",
        }
    ]);

    return (
        <div className="sidebar-container">
            <div className={"sb-header" + ((lightTheme)? "" : " dark")}>
                <div>
                    <IconButton>
                        <AccountCircleIcon  className={"icon" + (lightTheme? "" : " dark")}/>
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <PersonAddIcon className={"icon" + (lightTheme? "" : " dark")}/>
                    </IconButton>
                    <IconButton>
                        <GroupAddIcon className={"icon" + (lightTheme? "" : " dark")}/>
                    </IconButton>
                    <IconButton>
                        <AddCircleIcon className={"icon" + (lightTheme? "" : " dark")}/>
                    </IconButton>
                    <IconButton onClick={() => {setLightTheme((prevValue) =>{
                        return !prevValue;

                    });
                     }}
                     >
                        {lightTheme  &&   <NightlightIcon className={"icon" + (lightTheme? "" : " dark")}/>}
                        {!lightTheme && <LightModeIcon className={"icon" + (lightTheme? "" : " dark")}/>}
                    </IconButton>

                </div>
            </div>
            <div className={"sb-search" + (lightTheme? "" : " dark")}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder='search' className={"search-box" + (lightTheme? "" : " dark")}></input>
            </div>
            <div className={"sb-conversations" + (lightTheme? "" : " dark")}>
                {conversations.map((conversation) => { // Changed variable name to 'conversation'
                    return <ConversationsItem key={conversation.name} {...conversation} /> // Spread conversation object as props
                })}
            </div>
        </div>
    );
}

export default Sidebar;
