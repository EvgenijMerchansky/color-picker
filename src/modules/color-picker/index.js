import React from 'react';
import { connect } from 'react-redux';
import withLifecycle from '@hocs/with-lifecycle';
import { compose, withStateHandlers, setDisplayName } from 'recompose';

import DropDownScroll from '../../components/SlidersSwitcher';
import DropDownButton from '../../components/ButtonSwitcher';
import DropDownField from '../../components/DropDownField';

import normalizingFetch from '../../shared/normalizingFetch';
import immutableMerge from '../../shared/arrayMerger';
import blurUpdater from '../../shared/placeChecker';

import { DEFAULT_RGB_COLOR } from '../../constants';
import { DEFAULT_COLORS } from '../../constants';
import { STATES } from '../../constants';

import { getColors } from '../../actions';

import './index.css';

export const lifecycle = withLifecycle({
  onDidMount({ getColors, updateBlur }) {
    (async () => {
      getColors(await normalizingFetch(DEFAULT_COLORS));
    })();
  
    blurUpdater(updateBlur);
  },
});

export const withPickerState = withStateHandlers(
  ({ value }) => ({
    value: DEFAULT_RGB_COLOR,
    freezedValue: DEFAULT_RGB_COLOR,
    appField: undefined,
  }),
  {
    changeColor: ({ value }) => (item) => ({ value: item, freezedValue: item }),
    updateRed: ({ value }) => e => ({ value: immutableMerge(value, 0, +e.target.value) }),
    updateGreen: ({ value }) => e => ({ value: immutableMerge(value, 1, +e.target.value) }),
    updateBlue: ({ value }) => e => ({ value: immutableMerge(value, 2, +e.target.value) }),
    updateBlur: ({ freezedValue }) => e => ({ value: freezedValue }),
  }
);

/**
 *
 * @color-picker
 * general module
 */

export function ColorPicker({
  value,
  colors,
  loading,
  freezedValue,
  
  changeColor,
  updateRed,
  updateGreen,
  updateBlue,
}) {
  return (
    <div className="App">
      {
        !loading ?
          <div className="drop-down">
            <DropDownField
              color={value}
            />
            <DropDownScroll
              r={value[0]}
              g={value[1]}
              b={value[2]}
              color={value}
              freezedColor={freezedValue}
              changeColor={changeColor}
              updateRed={updateRed}
              updateBlue={updateBlue}
              updateGreen={updateGreen}
            />
            <DropDownButton
              colors={colors}
              changeColor={changeColor}
            />
          </div> :
          <h1>LOADING...</h1>
      }
    </div>
  );
}

const actions = { getColors };

const selector = ({ colors }) => ({
  colors: colors.items,
  loading: colors.state === STATES.PENDING,
});

const enhance = compose(
  setDisplayName("ColorPicker"),
  withPickerState,
  connect(selector, actions),
  lifecycle,
);

export default enhance(ColorPicker);
