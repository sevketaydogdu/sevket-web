export function clearSpacesAndSpecialCharacters(str: string) {
  const lowerCase = str.toLowerCase();
  // Regular expression to match spaces and special characters
  const regex = /[^\w\s]/g;
  // Remove spaces and special characters from the string
  let cleanedStr = lowerCase.replace(regex, '');

  // Remove spaces
  cleanedStr = cleanedStr.replace(/\s/g, '');
  return cleanedStr;
}
