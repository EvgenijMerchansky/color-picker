import React from 'react';
import './index.css';

/**
 *
 * @RGB_dropdown_content
 * items for RGB dropdown
 */

const PopoverClickRootClose = ({
  r,
  g,
  b,
  
  updateRed,
  updateGreen,
  updateBlue
}) => (
  <div className="container custom-container">
    <div className="red common-colors">
      <input
        id="red"
        type="range"
        min="0"
        max="255"
        value={r}
        onChange={updateRed}
      />
      <label>R</label>
    </div>
    <div className="green common-colors">
      <input
        id="green"
        type="range"
        min="0"
        max="255"
        value={g}
        onChange={updateGreen}
      />
      <label>G</label>
    </div>
    <div className="blue common-colors">
      <input
        id="blue"
        min="0"
        max="255"
        type="range"
        value={b}
        onChange={updateBlue}
      />
      <label>B</label>
    </div>
  </div>
);

export default PopoverClickRootClose;
