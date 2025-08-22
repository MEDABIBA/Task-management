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
    const links = settingsTabs.forEach(link => {
        return(
            <li className="settings__link">{link.name}</li>
        )
    })

    return(
        <div className="settings">
            <PageWrapper name="Settings" descr="Manage your account and application preferences">
                <ul className="settings__links">   
                    <li className="settings__link settings__link-active">Profile</li>
                    <li className="settings__link">Security</li>
                    <span className="underline"></span>
                </ul>

            </PageWrapper>
        </div>
    ) 
};

export default BaseSettings;