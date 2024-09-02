import React, {useState} from "react";
import DevTeamTabNavItem from "./DevTeamTabNavItem";
import DevTeamTabContent from "./DevTeamTabContent";
import WebsiteTeam from "./WebsiteTeam";
import IOSTeam from "./iOSTeam";
import AndroidTeam from "./AndroidTeam";

const DevTeamTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    
    <div className="DevTeamTabs">
      <ul className="nav">
        <DevTeamTabNavItem title="iOS Team" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <DevTeamTabNavItem title="Website Team" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <DevTeamTabNavItem title="Android Team" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <div className="outlet">
        <DevTeamTabContent id="tab1" activeTab={activeTab}>
          <IOSTeam/>
        </DevTeamTabContent>

        <DevTeamTabContent id="tab2" activeTab={activeTab}>
          <WebsiteTeam/>
        </DevTeamTabContent>

        <DevTeamTabContent id="tab3" activeTab={activeTab}>
          <AndroidTeam/>
        </DevTeamTabContent>

      </div>
    </div>
  );
};
export default DevTeamTabs;