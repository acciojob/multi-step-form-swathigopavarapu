import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const nextStep = () => {
  setTimeout(() => setStep(prev => prev + 1), 0);
};

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Credit card validation
    if (formData.card_info.length !== 12) return;

    // Expiry date validation
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(formData.expiry_date)) return;

    setSubmitted(true); // Show success message
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Step
          step={step}
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </form>

      {submitted && (
        <div
          data-testid="success-message"
          style={{ textAlign: "center", marginTop: "20px", color: "green" }}
        >
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default App;
