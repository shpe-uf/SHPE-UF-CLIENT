import React from "react";
const JrTabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
 );
};
export default JrTabNavItem;