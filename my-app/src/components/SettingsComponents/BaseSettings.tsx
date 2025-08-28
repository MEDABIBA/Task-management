import { useState } from "react";
import ProfileSettings from "./TabsSettings/ProfileSettings";
import SecuritySettings from "./TabsSettings/SecuritySettings";
// import ElementSettings from './TabsSettings/ElementSettings'
import PageWrapper from "../PageWrappper/PageWrapper";
import avatar from "../../assets/images/login.jpg";
import Button from "@mui/material/Button";

import "./settings.scss";
// MAKE appearance-theme-elem-header-button-active THROUGH A INPUT TAG
const settingsTabs = [
  {
    name: "Profile",
    links: "/settings/profile",
    component: <ProfileSettings />,
  },
  {
    name: "Security",
    links: "/settings/security",
    component: <SecuritySettings />,
  },
];
const BaseSettings = () => {
  const [activeTab, setActiveTab] = useState(settingsTabs[0]!.name);
  const [theme, setTheme] = useState("light");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log("Saving changes:", formData);
  };

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
            <form className="profile-info-form" onSubmit={(e) => e.preventDefault()}>
              <div className="profile-info-form-name">
                <div className="profile-info-form-name-first">
                  <label htmlFor="first-name" className="profile-info-form-title">First Name</label>
                  <input
                    type="text"
                    className="input profile-info-form-name-first-input"
                    id="first-name"
                    name="first-name"
                  />
                </div>
                <div className="profile-info-form-name-last">
                  <label htmlFor="last-name" className="profile-info-form-title">Last Name</label>
                  <input
                    type="text"
                    className="input profile-info-form-name-last-input"
                    id="last-name"
                    name="last-name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="profile-info-form-section">
                <label htmlFor="email" className="profile-info-form-title">Email Address</label>
                <input
                  type="email"
                  className="input profile-info-form-email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-info-form-section">
                <label htmlFor="bio" className="profile-info-form-title">Bio</label>
                <textarea
                  placeholder="Tell us about yourself..."
                  className="input profile-info-form-bio"
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  autoCorrect="on"
                  maxLength={600}
                />
              </div>
            </form>
            <div className="profile-info-button">
              <Button 
                className="button-black" 
                variant="contained"
                onClick={handleSaveChanges}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </section>
        <section className="appearance">
          <div className="container">
            <h2 className="appearance-title">Appearance</h2>
            <div className="appearance-theme">
              <p className="appearance-theme-title">Theme</p>
              <ul className="appearance-theme-list">
                <li 
                  className={`appearance-theme-elem ${theme === 'light' ? 'appearance-theme-elem-active' : ''}`}
                  onClick={() => setTheme('light')}
                >
                  <div className="appearance-theme-elem-header">
                    <span>Light</span>
                    <button 
                      className={`appearance-theme-elem-header-button ${theme === 'light' ? 'appearance-theme-elem-header-button-active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setTheme('light');
                      }}
                    />
                  </div>
                  <div className="appearance-theme-elem-skeleton-white">
                    <div className="appearance-theme-elem-skeleton-white-first"></div>
                    <div className="appearance-theme-elem-skeleton-white-second"></div>
                  </div>
                </li>
                <li 
                  className={`appearance-theme-elem ${theme === 'dark' ? 'appearance-theme-elem-active' : ''}`}
                  onClick={() => setTheme('dark')}
                >
                  <div className="appearance-theme-elem-header">
                    <span>Dark</span>
                    <button 
                      className={`appearance-theme-elem-header-button ${theme === 'dark' ? 'appearance-theme-elem-header-button-active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setTheme('dark');
                      }}
                    />
                  </div>
                  <div className="appearance-theme-elem-skeleton-black">
                    <div className="appearance-theme-elem-skeleton-black-first"></div>
                    <div className="appearance-theme-elem-skeleton-black-second"></div>
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
