import React from 'react';
import { connect } from 'react-redux';
import { compose, withStateHandlers, setDisplayName } from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';
import normalizingFetch from '../../shared/normalizingFetch';
import { getColors } from '../../actions';
import { DEFAULT_COLORS } from '../../constants';
import { STATES } from '../../constants';

export const lifecycle = withLifecycle({
  onDidMount({ getColors }) {
    (async () => {
      getColors(await normalizingFetch(DEFAULT_COLORS));
    })();
  },
});

export const withPickerState = withStateHandlers(({
  state
}) => ({
  state: {
    colors: {},
    properties: ['1', '2', '3'],
  }
}), {
  getColorsList: () => {
    
  },
});

export function ColorPicker({
  colors,
  loading,
}) {
  return (
    <div className="App">
      
      {
        !loading ?
          <p className="App-intro">
            Color picker in action
          </p> : <h1>LOADING...</h1>
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
