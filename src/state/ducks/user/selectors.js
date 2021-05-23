import * as R from 'ramda';

const getSelected = R.pathOr(false, ['users', 'isSelected']);

const selectors = {
  getSelected,
};

export default selectors;
