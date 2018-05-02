import React from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

import './index.css';

import toHex from '../../shared/toHexConverter';

function PopoverClickRootClose({ r, g, b, updateRed, updateGreen, updateBlue }) { // IN SEPARATE COMPONENT
  return (
    <Popover id="popover-trigger-click-root-close" title="Popover bottom">
      <div className="container custom-container">
        <div className="sliders">
          <div className="red">
            <input
              id="red"
              type="range"
              min="0"
              max="255"
              value={r}
              onChange={updateRed}
            />
            <label>Red: </label>
          </div>
          <div className="green">
            <input
              id="green"
              type="range"
              min="0"
              max="255"
              value={g}
              onChange={updateGreen}
            />
            <label>Green:</label>
          </div>
          <div className="blue">
            <input id="blue" type="range"
              min="0"
              max="255"
              value={b}
              onChange={updateBlue}
            />
            <label>Blue: </label>
          </div>
        </div>
        <div className="button-block"></div>
      </div>
    </Popover>
  );
}

export function DropDownSlide({
  r,
  g,
  b,
  color,
  
  updateRed,
  updateGreen,
  updateBlue,
}) {
  return (
    <div className="drop-down__slide-wrapper">
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={
          <PopoverClickRootClose
            r={r}
            g={g}
            b={b}
            updateRed={updateRed}
            updateGreen={updateGreen}
            updateBlue={updateBlue}
          />
        }
      >
        <Button className="drop-down__slide-button">
          <div
            className="drop-down__slide-current-color"
            style={{
              backgroundColor: toHex(...color)
            }}
          />
        </Button>
      </OverlayTrigger>
    </div>
  )
}

export default DropDownSlide;