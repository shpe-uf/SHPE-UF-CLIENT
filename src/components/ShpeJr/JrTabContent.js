import React from "react";
 
const JrTabContent = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="JrTabContent">
     { children }
   </div>
   : null
 );
};
 
export default JrTabContent;