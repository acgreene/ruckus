import validator from "validator";

/**
 *
 @param colorA the outside colors in the gradient.
 @param colorB the middle color in the gradient.
 @param reverse a boolean, if true flips the position of color a and color b.
 */
export function makeColorGradient(
  colorA: string,
  colorB: string,
  reverse?: boolean,
): string {
  if (reverse) {
    return `linear-gradient(90deg,${colorB},${colorA},${colorB})`;
  }
  return `linear-gradient(90deg,${colorA},${colorB},${colorA})`;
}

/**
 * @param email the email address to test
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * @param phone the phone number to test
 */
export function isValidPhoneNumber(phone: string): boolean {
  return validator.isMobilePhone(phone);
}
