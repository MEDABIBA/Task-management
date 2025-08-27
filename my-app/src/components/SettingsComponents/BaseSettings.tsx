import { useState } from "react";
import ProfileSettings from "./TabsSettings/ProfileSettings";
import SecuritySettings from "./TabsSettings/SecuritySettings";
// import ElementSettings from './TabsSettings/ElementSettings'
import PageWrapper from "../PageWrappper/PageWrapper";
import avatar from "../../assets/images/login.jpg";
import Button from "@mui/material/Button";

import "./settings.scss";

const settingsTabs = [
  {
    name: "Profile",
    links: "/setings/profile",
    component: <ProfileSettings />,
  },
  {
    name: "Security",
    links: "/setings/security",
    component: <SecuritySettings />,
  },
];
const BaseSettings = () => {
  const [activeTab, setActiveTab] = useState(settingsTabs[0]!.name);

  return (
    <div className="settings">
      <PageWrapper
        name="Settings"
        descr="Manage your account and application preferences">
        <nav className="nav">
          <ul className="settings__links">
            {settingsTabs.map((tab) => (
              <li
                key={tab.name}
                className={`settings__link ${
                  activeTab === tab.name ? "settings__link-active" : ""
                }`}
                onClick={() => setActiveTab(tab.name)}>
                {tab.name}
              </li>
            ))}
            <span className="underline"></span>
          </ul>
        </nav>
        <section className="container">
          <div className="profile-info">
            <h2 className="profile-info-title">Profile Information</h2>
            <p className="profile-info-descr">Profile Picture</p>
            <div className="profile-info-avatar">
              <img
                src={avatar}
                alt="avatar"
                className="profile-info-avatar-img"
              />
              <div className="profile-info-avatar-right">
                <Button className="button-black" variant="contained">
                  Change Avatar
                </Button>
                <Button className="button-white" variant="contained">
                  Remove
                </Button>
              </div>
            </div>
            <form className="profile-info-form">
              <div className="profile-info-form-name">
                <div className="profile-info-form-name-first">
                  <p className="profile-info-form-title">First Name</p>
                  <input
                    type="text"
                    className=" input profile-info-form-name-first-input"
                  />
                </div>
                <div className="profile-info-form-name-last">
                  <p className="profile-info-form-title">First Name</p>
                  <input
                    type="text"
                    className=" input profile-info-form-name-last-input"
                  />
                </div>
              </div>
              <div className="profile-info-form-section">
                <p className="profile-info-form-title">Email Adress</p>
                <input type="text" className=" input profile-info-form-email" />
              </div>
              <div className="profile-info-form-section">
                <p className="profile-info-form-title">Bio</p>
                <input type="text" className=" input profile-info-form-bio" />
              </div>
            </form>
            <div className="profile-info-button">
              {" "}
              <Button className="button-black" variant="contained">
                Save Changes
              </Button>
            </div>
          </div>
        </section>
      </PageWrapper>
    </div>
  );
};

export default BaseSettings;
