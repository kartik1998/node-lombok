/**
 * Capitilizes the first character of an input string
 * @param input string
 */
export function capitilizeFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.substring(1);
}
