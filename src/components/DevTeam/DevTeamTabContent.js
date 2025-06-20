import React from "react";
 
const DevTeamContent = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="DevTeamTabContent">
     { children }
   </div>
   : null
 );
};
 
export default DevTeamContent;