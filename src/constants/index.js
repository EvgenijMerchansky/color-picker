const colors = require('../__mocks__/colors.json');

export const STATES = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
};

// const convertToRGB = {
//   r: (value) => {
//     console.log(value, 'in func');
//     // parseInt(value.substring(0,2), 16)
//   },
//   g: (value) => parseInt(value.substring(2,4), 16),
//   b: (value) => parseInt(value.substring(4,6), 16),
// };

export function convertHex(hex){
  console.log(hex, 'vhex');

  const updatedHex = hex.replace('#','');
  const r = parseInt(updatedHex.substring(0,2), 16),
        g = parseInt(updatedHex.substring(2,4), 16),
        b = parseInt(updatedHex.substring(4,6), 16);
  return [r,g,b];
}

export const DEFAULT_COLORS = colors.colors;
export const DEFAULT_HEX_COLOR = `#${DEFAULT_COLORS[0]}`;
export const DEFAULT_RGB_COLOR = convertHex(DEFAULT_COLORS[0]);

// console.log(DEFAULT_RGB_COLOR, 'DEFAULT_RGB_COLOR');
