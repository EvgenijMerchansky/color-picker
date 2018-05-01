import React from 'react';
import { connect } from 'react-redux';
import { compose, withStateHandlers, setDisplayName } from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';
import normalizingFetch from '../../shared/normalizingFetch';
import { getColors } from '../../actions';
import { DEFAULT_COLORS } from '../../constants';
import { STATES } from '../../constants';
import './index.css';

import DropDownField from '../../components/DropDownField';
import DropDownScroll from '../../components/SlidersSwitcher';
import DropDownButton from '../../components/ButtonSwitcher';

export const lifecycle = withLifecycle({
  onDidMount({ getColors }) {
    (async () => {
      getColors(await normalizingFetch(DEFAULT_COLORS));
    })();
  },
});

export const withPickerState = withStateHandlers(
  ({value = { color: undefined }}) => ({
    value,
  }),
   {
     changeColor: ({ state }) => (item) => {
       return {
         value: item,
       };
     },
   }
);

export function ColorPicker({
  value,
  colors,
  loading,
  
  changeColor,
}) {
  return (
    <div className="App">
      {
        !loading ?
          <div className="drop-down">
            <DropDownField
              color={value}
              defaultColor={colors}
            />
            <DropDownScroll
              color={value}
              defaultColor={colors}
              changeColor={changeColor} // currently working
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
