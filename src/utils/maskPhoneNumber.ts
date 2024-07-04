export const maskPhoneNumber = (phoneNumber: string): string => {
  const phoneLength = phoneNumber.length;
  const maskLength = phoneLength - 6; // Number of characters to mask

  if (phoneLength <= 6) {
    return phoneNumber; // Return the original phone number if it's too short to mask
  }

  const firstPart = phoneNumber.slice(0, 6); // The first part of the phone number (e.g., country code)
  const lastPart = phoneNumber.slice(-5); // The last three digits of the phone number

  const maskedMiddle = "*".repeat(maskLength); // Create a string of asterisks to replace the middle part

  return `${firstPart}${maskedMiddle}${lastPart}`;
};
