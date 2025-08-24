import { useState } from "react";
import ProfileSettings from "./TabsSettings/ProfileSettings";
import SecuritySettings from "./TabsSettings/SecuritySettings";
// import ElementSettings from './TabsSettings/ElementSettings'
import PageWrapper from "../PageWrappper/PageWrapper";

import './settings.scss'

const settingsTabs = [
  {name: 'Profile', links:'/setings/profile', component: <ProfileSettings/>},
  {name: 'Security', links:'/setings/security', component: <SecuritySettings/>},
]
const BaseSettings = () => {
    const [activeTab, setActiveTab] = useState(settingsTabs[0]!.name);

    return(
        <div className="settings">
            <PageWrapper name="Settings" descr="Manage your account and application preferences">
                <ul className="settings__links">   
                    {settingsTabs.map(tab => (
                        <li
                            key={tab.name}
                            className={`settings__link ${activeTab === tab.name ? "settings__link-active" : ""}`}
                            onClick={() => setActiveTab(tab.name)}>
                            {tab.name}
                        </li>
                    ))}
                    <span className="underline"></span>
                </ul>

            </PageWrapper>
        </div>
    ) 
};

export default BaseSettings;