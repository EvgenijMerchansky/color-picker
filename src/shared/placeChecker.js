import { POPUP_OVERLAY, MODAL_CLASSNAME } from '../constants'

/**
 *
 * @helper_functions
 * makeBlur
 */

const makeBlur = (updater) => {
  document.querySelector('.App').addEventListener('click', (e) => {
    let modalIsOpen = document.querySelector(`.${MODAL_CLASSNAME}`) === null;
    
    if (!modalIsOpen && e.target.className === POPUP_OVERLAY) {
      updater();
    }
  });
};

export default makeBlur;