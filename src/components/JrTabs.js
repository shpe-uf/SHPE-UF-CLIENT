import React, {useState} from "react";
import JrTabNavItem from "./JrTabNavItem";
import JrTabContent from "./JrTabContent";
import SJrContact from "./SJrContact";
import SJrSchools from "./SJrSchools";
import SJrHighEvent from "./SJrHighEvent";
import SJrElemMidEvent from "./SJrElemMidEvent";

const JrTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    
    <div className="JrTabs">
      <ul className="nav">
        <JrTabNavItem title="High School Events" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <JrTabNavItem title="K-6 School Events" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <JrTabNavItem title="Partner Schools" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <JrTabNavItem title="Contact Us" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <div className="outlet">
        <JrTabContent id="tab1" activeTab={activeTab}>
          <SJrHighEvent/>
        </JrTabContent>

        <JrTabContent id="tab2" activeTab={activeTab}>
          <SJrElemMidEvent/>
        </JrTabContent>

        <JrTabContent id="tab3" activeTab={activeTab}>
          <SJrSchools/>
        </JrTabContent>

        <JrTabContent id="tab4" activeTab={activeTab}>
          <SJrContact/>
        </JrTabContent>

      </div>
    </div>
  );
};
export default JrTabs;