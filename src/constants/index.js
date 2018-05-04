import convertHex from '../shared/toRgbConverter'
const colors = require('../__mocks__/colors.json');

/**
 *
 * @constats
 * constants for application
 */

export const POPUP_OVERLAY = 'popup-overlay';
export const MODAL_CLASSNAME = 'popup-content';
export const DEFAULT_COLORS = colors.colors;
export const DEFAULT_RGB_COLOR = convertHex(DEFAULT_COLORS[0]);
export const STATES = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
};
