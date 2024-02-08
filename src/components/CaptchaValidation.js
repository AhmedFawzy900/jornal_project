import React, { useState } from 'react';

const generateCaptcha = () => {
  // Generate a random 4-digit number as the CAPTCHA code
  return Math.floor(1000 + Math.random() * 9000);
};

const CaptchaValidation = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [input, setInput] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the input matches the CAPTCHA code
    if (input === captcha.toString()) {
      setValidationResult('CAPTCHA validation successful!');
    } else {
      setValidationResult('CAPTCHA validation failed. Please try again.');
      // Generate a new CAPTCHA code
      setCaptcha(generateCaptcha());
    }
    // Clear the input field
    setInput('');
  };

  return (
    <div>
      <h2>CAPTCHA Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter the CAPTCHA code:</label>
          <input type="text" value={input} onChange={handleChange} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>{validationResult}</div>
      <div>
        <img src={`https://dummyimage.com/150x50/000/fff&text=${captcha}`} alt="CAPTCHA" />
      </div>
    </div>
  );
};

export default CaptchaValidation;
