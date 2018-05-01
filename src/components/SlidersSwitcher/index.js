import React from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import './index.css';

const popoverClickRootClose = ( // in separate component!
  <Popover id="popover-trigger-click-root-close" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

export function DropDownSlide({
  color,
  defaultColor,
  
  changeColor
}) {
  return (
    <div className="drop-down__slide-wrapper">
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={popoverClickRootClose}
      >
        <Button className="drop-down__slide-button">
          <div
            className="drop-down__slide-current-color"
            style={{
              backgroundColor: color.hex || defaultColor[0].hex
            }}
          />
        </Button>
      </OverlayTrigger>
    </div>
  )
}

export default DropDownSlide;