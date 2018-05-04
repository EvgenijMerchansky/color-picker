import React, {Fragment} from 'react';
import Popup from "reactjs-popup";

import { contentStyle, overlayStyle } from './popupStyle';
import './index.css';

import toHex from '../../shared/toHexConverter';

import PopoverClickRootClose from '../SlidersPopoverContent';

/**
 *
 * @dropdown
 * module for choose color in RGB modal
 */

export function DropDownSlide({
  r,
  g,
  b,
  color,
  freezedColor,
  
  changeColor,
  updateRed,
  updateGreen,
  updateBlue,
}) {
  return (
    <div className="drop-down__slide-wrapper">
      <Popup
        modal={true}
        contentStyle={contentStyle}
        overlayStyle={overlayStyle}
        arrow={false}
        className="custom-popup-content"
        trigger={
          <button className="drop-down__slide-button">
            <span className="drop-down__slide-button_color" style={{ backgroundColor: toHex(...color) }}/>
          </button>
        }
        position="bottom right"
      >
        { close => (
          <Fragment>
            <PopoverClickRootClose
              color={color}
              freezedColor={freezedColor}
              r={r}
              g={g}
              b={b}
              changeColor={changeColor}
              updateRed={updateRed}
              updateGreen={updateGreen}
              updateBlue={updateBlue}
            />
            <div className="drop-down__slide-button-footer">
              <button
                className="drop-down__slide-button-footer_cancel"
                onClick={() => {
                  changeColor(freezedColor);
                  close();
                }}
              >
                CANCEL
              </button>
              <button
                className="sliders_accept"
                onClick={() => close()}
              >
                OK
              </button>
            </div>
          </Fragment>
        )}
      </Popup>
    </div>
  )
}

export default DropDownSlide;