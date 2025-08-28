import { useState } from "react";
import ProfileSettings from "./TabsSettings/ProfileSettings";
import SecuritySettings from "./TabsSettings/SecuritySettings";
// import ElementSettings from './TabsSettings/ElementSettings'
import PageWrapper from "../PageWrappper/PageWrapper";
import avatar from "../../assets/images/login.jpg";
import Button from "@mui/material/Button";

import "./settings.scss";
// MAKE apperance-theme-elem-header-button-active THROUGH A INPUT TAG
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
                    id="first-name"
                    name="first-name"
                  />
                </div>
                <div className="profile-info-form-name-last">
                  <p className="profile-info-form-title">First Name</p>
                  <input
                    type="text"
                    className=" input profile-info-form-name-last-input"
                    id="last-name"
                    name="last-name"
                  />
                </div>
              </div>
              <div className="profile-info-form-section">
                <p className="profile-info-form-title">Email Adress</p>
                <input
                  type="email"
                  className=" input profile-info-form-email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="profile-info-form-section">
                <p className="profile-info-form-title">Bio</p>
                <textarea
                  placeholder="Tell us about yourself..."
                  className=" input profile-info-form-bio"
                  autoCorrect="on"
                  maxLength={600}
                  name="bio"></textarea>
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
        <section className="apperance">
          <div className="container">
            <h2 className="apperance-title">Apperance</h2>
            <div className="apperance-theme">
              <p className="apperance-theme-title">Theme</p>
              <ul className="apperance-theme-list">
                <li className="apperance-theme-elem-active">
                  <div className="apperance-theme-elem-header">
                    <span>Light</span>
                    <button className="apperance-theme-elem-header-button-active"></button>
                  </div>
                  <div className="apperance-theme-elem-skeleton-white">
                    <div className="apperance-theme-elem-skeleton-white-first"></div>
                    <div className="apperance-theme-elem-skeleton-white-second"></div>
                  </div>
                </li>
                <li className="apperance-theme-elem">
                  <div className="apperance-theme-elem-header">
                    <span>Light</span>
                    <button className="apperance-theme-elem-header-button"></button>
                  </div>
                  <div className="apperance-theme-elem-skeleton-black">
                    <div className="apperance-theme-elem-skeleton-black-first"></div>
                    <div className="apperance-theme-elem-skeleton-black-second"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </PageWrapper>
    </div>
  );
};

export default BaseSettings;
