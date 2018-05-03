import convertHex from '../shared/toRgbConverter'
const colors = require('../__mocks__/colors.json');

export const DEFAULT_COLORS = colors.colors;
export const DEFAULT_RGB_COLOR = convertHex(DEFAULT_COLORS[0]);
export const STATES = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
};
