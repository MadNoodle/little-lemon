// Validates if the text is only composed of alpabetic characters
export function validateString(str) {
    return /^[A-Za-z]*$/.test(str);
  }
  
// Function to validate the email address
export function validateEmail(email) {
// Regular expression for a simple email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

export function isValidPhoneNumber(phoneNumber) {
  // Define a regular expression for a US phone number with optional hyphens
  const phoneRegex = /^(\+?1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  // Test the provided phone number against the regex
  return phoneRegex.test(phoneNumber);
}