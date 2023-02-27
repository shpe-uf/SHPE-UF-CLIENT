import React, {useState} from "react";
import JrTabNavItem from "./JrTabNavItem";
import JrTabContent from "./JrTabContent";
import SJrAbout from "./SJrAbout";
import SJrContact from "./SJrContact";
import SJrSchools from "./SJrSchools";

const JrTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    
    <div className="JrTabs">
      <ul className="nav">
      <JrTabNavItem title="About" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <JrTabNavItem title="Partner Schools" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <JrTabNavItem title="Contact Us" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <div className="outlet">
        <JrTabContent id="tab1" activeTab={activeTab}>
          <SJrAbout/>
        </JrTabContent>

        <JrTabContent id="tab2" activeTab={activeTab}>
          <SJrSchools/>
        </JrTabContent>

        <JrTabContent id="tab3" activeTab={activeTab}>
          <SJrContact/>
        </JrTabContent>

      </div>
    </div>
  );
};
export default JrTabs;