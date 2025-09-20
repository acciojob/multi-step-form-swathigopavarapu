import React from "react";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  const validateExpiry = (e) => {
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (e.target.value && !expiryRegex.test(e.target.value)) {
      alert("Expiration date must be in MM/YY format.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div id="step1">
            <h3>Customer Details</h3>
            <label>
              First Name:
              <input
                id="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                id="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div id="step2">
            <h3>Car Details</h3>
            <label>
              Model:
              <input
                id="model"
                type="text"
                value={formData.model}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Car Price:
              <input
                id="car_price"
                type="text"
                value={formData.car_price}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div id="step3">
            <h3>Payment Details</h3>
            <label>
              Credit Card Number:
              <input
                id="card_info"
                type="text"
                value={formData.card_info}
                onChange={handleChange}
              />
            </label>
            {formData.card_info.length > 0 && formData.card_info.length !== 12 && (
              <p style={{ color: "red" }}>
                Credit card number must be exactly 12 digits long.
              </p>
            )}
            <br />

            <label>
              Expiration Date (MM/YY):
              <input
                id="expiry_date"
                type="text"
                placeholder="MM/YY"
                value={formData.expiry_date}
                onChange={handleChange}
                onBlur={validateExpiry}
                maxLength={5}
              />
            </label>
            {formData.expiry_date.length > 0 &&
              !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry_date) && (
                <p style={{ color: "red" }}>
                  Expiration date must be in MM/YY format.
                </p>
              )}
            <br />

            <button type="button" onClick={prevStep}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Step;
