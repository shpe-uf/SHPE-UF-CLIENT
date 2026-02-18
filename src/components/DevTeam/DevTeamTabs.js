import React, { useMemo, useState } from "react";
import DevTeamTabNavItem from "./DevTeamTabNavItem";
import DevTeamTabContent from "./DevTeamTabContent";
import WebsiteTeam from "./WebsiteTeam";
import IOSTeam from "./iOSTeam";
import AndroidTeam from "./AndroidTeam";

const DevTeamTabs = ({ members = [], loading }) => {
  const [activeTab, setActiveTab] = useState("tab2");
  const groupedMembers = useMemo(() => {
    const groups = { ios: [], website: [], android: [] };
    members.forEach((member) => {
      if (!member || member.active === false) return;
      const teamName = (member.team || "").toLowerCase();
      if (teamName === "ios team") {
        groups.ios.push(member);
      } else if (teamName === "website team") {
        groups.website.push(member);
      } else if (teamName === "android team") {
        groups.android.push(member);
      }
    });
    return groups;
  }, [members]);

  return (

    <div className={`DevTeamTabs${loading ? " loading" : ""}`}>
      <ul className="nav">
        <DevTeamTabNavItem title="iOS Team" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <DevTeamTabNavItem title="Website Team" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <DevTeamTabNavItem title="Android Team" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <div className="outlet">
        <DevTeamTabContent id="tab1" activeTab={activeTab}>
          <IOSTeam members={groupedMembers.ios}/>
        </DevTeamTabContent>

        <DevTeamTabContent id="tab2" activeTab={activeTab}>
          <WebsiteTeam members={groupedMembers.website}/>
        </DevTeamTabContent>

        <DevTeamTabContent id="tab3" activeTab={activeTab}>
          <AndroidTeam members={groupedMembers.android}/>
        </DevTeamTabContent>

      </div>
    </div>
  );
};
export default DevTeamTabs;
