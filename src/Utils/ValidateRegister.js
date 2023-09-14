export default function ValidateRegister(values) {
    let errors = {};
  
    if (!values.first_name.trim()) {
      errors.first_name = "First Name Required";
    } else if (values.first_name.trim().split(' ').length > 2) {
      errors.first_name = "First Name should have only one space inside";
    }
  
    if (!values.last_name.trim()) {
      errors.last_name = "Last Name Required";
    } else if (values.last_name.trim().split(' ').length > 2) {
      errors.last_name = "Last Name should have only one space inside";
    }
  
    if (!values.email.trim()) {
      errors.email = "Email Required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid Email Format";
    }
  
    if (!values.username.trim()) {
      errors.username = "Username Required";
    } else if (
      !/^[a-zA-Z0-9]+$/.test(values.username) || // Check for special characters
      values.username.length < 5 // Check for length
    ) {
      errors.username =
        "Username should be at least 5 characters long and contain only letters and numbers.";
    }
  
    if (!values.password.trim()) {
      errors.password = "Password Required";
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Password Mismatch";
    } else if (values.password.length < 8) {
      errors.password = "Password should contain at least 8 characters";
    }
  
    return errors;
  }
  
  
  // Email validation function using a regular expression
  function isValidEmail(email) {
    // Regular expression pattern for a basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
  