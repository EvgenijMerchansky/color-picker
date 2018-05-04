/**
 *
 * @helper_functions
 * itemToHex
 */

const itemToHex = (c) => {
  const hex = c.toString(16);
  
  return hex.length === 1 ? "0" + hex : hex;
};

const toHex = (r, g, b) => "#" + itemToHex(r) + itemToHex(g) + itemToHex(b);

export default toHex;