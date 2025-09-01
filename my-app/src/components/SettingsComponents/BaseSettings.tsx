import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import ProfileSettings from "./TabsSettings/ProfileSettings";
// import ElementSettings from './TabsSettings/ElementSettings'
import Button from "@mui/material/Button";
import avatar from "../../assets/images/login.jpg";
import PageWrapper from "../PageWrappper/PageWrapper";

import "./settings.scss";
// MAKE appearance-theme-elem-header-button-active THROUGH A INPUT TAG
const settingsTabs = [
  {
    name: "Profile",
    links: "/settings/profile",
    component: <ProfileSettings />,
  },
  // {
  //   name: "Security",
  //   links: "/settings/security",
  //   component: <SecuritySettings />,
  // },
];
const BaseSettings = () => {
  const [activeTab, setActiveTab] = useState(settingsTabs[0]!.name);
  const [theme, setTheme] = useState("light");
  const [bioLimit, setBioLimit] = useState(false);
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   bio: "",
  // });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  return (
    <div className="settings">
      <PageWrapper name="Settings" descr="Manage your account and application preferences">
        <nav className="nav">
          <ul className="settings__links">
            {settingsTabs.map((tab) => (
              <li
                key={tab.name}
                className={`settings__link ${activeTab === tab.name ? "settings__link-active" : ""}`}
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
              <img src={avatar} alt="avatar" className="profile-info-avatar-img" />
              <div className="profile-info-avatar-right">
                <Button className="button-black" variant="contained">
                  Change Avatar
                </Button>
                <Button className="button-white" variant="contained">
                  Remove
                </Button>
              </div>
            </div>

            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                bio: "",
              }}
              validate={(values) => {
                const errors = {
                  firstName: "",
                  lastName: "",
                  email: "",
                  bio: "",
                };
                if (!values.email && !values.firstName && !values.lastName && !values.bio) {
                  errors.bio = "Must be fill at least one field";
                }
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) && values.email.length !== 0) {
                  errors.email = "Invalid email address";
                }
                if (values.firstName.length > 1 && !/^(?=.*[A-Za-z]).+$/.test(values.firstName)) {
                  errors.firstName = "Invalid first name";
                }
                if (values.lastName.length > 1 && !/^(?=.*[A-Za-z]).+$/.test(values.lastName)) {
                  errors.lastName = "Invalid first name";
                }
                // if (values.bio.length === 600) {
                //   errors.bio = "Character limit reached";
                // }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  // Handle save logic here
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}>
              {({ isSubmitting }: { isSubmitting: boolean }) => (
                <Form className="profile-info-form">
                  <div className="profile-info-form-name">
                    <div className="profile-info-form-name-first">
                      <label htmlFor="firstName" className="profile-info-form-title">
                        First Name
                      </label>
                      <Field
                        type="text"
                        className="input profile-info-form-name-first-input"
                        id="firstName"
                        name="firstName"
                        placeholder="Your name"
                      />
                      <ErrorMessage name="firstName" component="div" className="error-message" />
                    </div>
                    <div className="profile-info-form-name-last">
                      <label htmlFor="lastName" className="profile-info-form-title">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        className="input profile-info-form-name-last-input"
                        id="lastName"
                        name="lastName"
                        placeholder="Your last name"
                        // value={formData.lastName}
                        // onChange={handleInputChange}
                      />
                      <ErrorMessage name="lastName" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="profile-info-form-section">
                    <label htmlFor="email" className="profile-info-form-title">
                      Email Address
                    </label>
                    <Field
                      type="email"
                      className="input profile-info-form-email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      // value={formData.email}
                      // onChange={handleInputChange}
                    />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>
                  <div className="profile-info-form-section">
                    <label htmlFor="bio" className="profile-info-form-title">
                      Bio
                    </label>
                    <Field name="bio">
                      {({ field }: any) => (
                        <textarea
                          {...field} // подключает value и onChange от Formik
                          placeholder="Tell us about yourself..."
                          className="input profile-info-form-bio"
                          autoCorrect="on"
                          maxLength={600}
                          onChange={(e) => {
                            field.onChange(e); // обновляем Formik state
                            setBioLimit(e.target.value.length >= 600); // лимит
                          }}
                        />
                      )}
                    </Field>

                    {bioLimit && <div className="error-message">Character limit reached</div>}
                    <ErrorMessage name="bio" component="div" className="error-message" />
                  </div>
                  <div className="profile-info-button">
                    <Button className="button-black" variant="contained" type="submit" disabled={isSubmitting}>
                      Save Changes
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
        <section className="appearance">
          <div className="container">
            <h2 className="appearance-title">Appearance</h2>
            <div className="appearance-theme">
              <p className="appearance-theme-title">Theme</p>
              <ul className="appearance-theme-list">
                <li
                  className={`appearance-theme-elem ${theme === "light" ? "appearance-theme-elem-active" : ""}`}
                  onClick={() => setTheme("light")}>
                  <div className="appearance-theme-elem-header">
                    <span>Light</span>
                    <button
                      className={`appearance-theme-elem-header-button ${
                        theme === "light" ? "appearance-theme-elem-header-button-active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setTheme("light");
                      }}
                    />
                  </div>
                  <div className="appearance-theme-elem-skeleton-white">
                    <div className="appearance-theme-elem-skeleton-white-first"></div>
                    <div className="appearance-theme-elem-skeleton-white-second"></div>
                  </div>
                </li>
                <li
                  className={`appearance-theme-elem ${theme === "dark" ? "appearance-theme-elem-active" : ""}`}
                  onClick={() => setTheme("dark")}>
                  <div className="appearance-theme-elem-header">
                    <span>Dark</span>
                    <button
                      className={`appearance-theme-elem-header-button ${
                        theme === "dark" ? "appearance-theme-elem-header-button-active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setTheme("dark");
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
