export function validateString(str) {
    return /^[A-Za-z]*$/.test(str);
  }
  
// Function to validate the email address
export function validateEmail(email) {
// Regular expression for a simple email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}
