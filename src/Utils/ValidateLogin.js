export default function ValidateLogin(values) {
    let errors = {};
  
    
  
    if (!values.email.trim()) {
      errors.email = "Email Required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid Email Format";
    }
  
    
    if (!values.password.trim()) {
      errors.password = "Password Required";
    }
  
    return errors;
  }
  
  
  // Email validation function using a regular expression
  function isValidEmail(email) {
    // Regular expression pattern for a basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
  