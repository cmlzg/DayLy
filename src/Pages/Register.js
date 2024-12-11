import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import { useNavigate } from "react-router-dom";
import "../Styles/Register.css"; 

function Registration() {
  const [formData, setFormData] = useState({
    personalInfo: { firstName: "", lastName: "" },
    contactInfo: { email: "", phone: "" },
    accountInfo: { username: "", password: "", confirmPassword: "" },
    additionalDetails: { about: "" },
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(0); 
  const navigate = useNavigate();

  const steps = [
    { name: "Personal Information", content: "personal" },
    { name: "Contact Information", content: "contact" },
    { name: "Account Information", content: "account" },
    { name: "Additional Details", content: "additional" },
  ];

  const handleChange = (e) => {
    const { name, value, id } = e.target;
    const section = id.split(".")[0]; 
    setFormData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], [name]: value },
    }));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract all data from the form
    const { personalInfo, contactInfo, accountInfo } = formData;

    // Basic validations
    if (
      !personalInfo.firstName ||
      !personalInfo.lastName ||
      !contactInfo.email ||
      !contactInfo.phone ||
      !accountInfo.username ||
      !accountInfo.password ||
      !accountInfo.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (accountInfo.password !== accountInfo.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

   
    setError("");

    
    const newUser = {
      id: Date.now(), // Unique ID
      firstName: personalInfo.firstName,
      lastName: personalInfo.lastName,
      email: contactInfo.email,
      phone: contactInfo.phone,
      username: accountInfo.username,
      password: accountInfo.password,
      about: formData.additionalDetails.about,
    };

    
    const users = JSON.parse(localStorage.getItem("users")) || [];

   
    const existingUser = users.find(
      (user) => user.email === newUser.email || user.username === newUser.username
    );

    if (existingUser) {
      setError("Email or username already exists");
      return;
    }

    
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

   
    setSuccessMessage("Registration successful! Redirecting to login...");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7"> {/* Adjust size for larger container */}
          <div className="card shadow-lg p-5">
            <h2 className="text-center mb-4">Registration Form</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            <form onSubmit={handleSubmit}>
              {/* Tabs Navigation */}
              <ul className="nav nav-tabs" id="registrationTabs" role="tablist">
                {steps.map((step, index) => (
                  <li className="nav-item" role="presentation" key={step.name}>
                    <a
                      className={`nav-link ${currentStep === index ? "active" : ""}`}
                      id={`${step.content}-tab`}
                      data-bs-toggle="tab"
                      href={`#${step.content}`}
                      role="tab"
                      aria-controls={step.content}
                      aria-selected={currentStep === index}
                    >
                      {step.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Tabs Content */}
              <div className="tab-content" id="registrationTabsContent">
                {/* Personal Information Tab */}
                <div
                  className={`tab-pane fade ${currentStep === 0 ? "show active" : ""}`}
                  id="personal"
                  role="tabpanel"
                  aria-labelledby="personal-tab"
                >
                  <div className="form-group mb-3">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="personalInfo.firstName"
                      name="firstName"
                      className="form-control"
                      value={formData.personalInfo.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="personalInfo.lastName"
                      name="lastName"
                      className="form-control"
                      value={formData.personalInfo.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Contact Information Tab */}
                <div
                  className={`tab-pane fade ${currentStep === 1 ? "show active" : ""}`}
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="contactInfo.email"
                      name="email"
                      className="form-control"
                      value={formData.contactInfo.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="contactInfo.phone"
                      name="phone"
                      className="form-control"
                      value={formData.contactInfo.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. +639XXXXXXXXX"
                    />
                  </div>
                </div>

                {/* Account Information Tab */}
                <div
                  className={`tab-pane fade ${currentStep === 2 ? "show active" : ""}`}
                  id="account"
                  role="tabpanel"
                  aria-labelledby="account-tab"
                >
                  <div className="form-group mb-3">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="accountInfo.username"
                      name="username"
                      className="form-control"
                      value={formData.accountInfo.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="accountInfo.password"
                      name="password"
                      className="form-control"
                      value={formData.accountInfo.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="accountInfo.confirmPassword"
                      name="confirmPassword"
                      className="form-control"
                      value={formData.accountInfo.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Additional Details Tab */}
                <div
                  className={`tab-pane fade ${currentStep === 3 ? "show active" : ""}`}
                  id="additional"
                  role="tabpanel"
                  aria-labelledby="additional-tab"
                >
                  <div className="form-group mb-3">
                    <label htmlFor="about">About You</label>
                    <textarea
                      id="additionalDetails.about"
                      name="about"
                      className="form-control"
                      rows="3"
                      value={formData.additionalDetails.about}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="text-center mt-4">
                {currentStep > 0 && (
                  <button type="button" className="btn btn-secondary mx-2" onClick={handlePrev}>
                    Previous
                  </button>
                )}
                {currentStep < steps.length - 1 ? (
                  <button type="button" className="btn btn-primary mx-2" onClick={handleNext}>
                    Next
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary mx-2">
                    Register
                  </button>
                )}
                <div className="text-center mt-3">
                <p>
                  Don't have an account? <a href="/register">Register here</a>
                </p>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
