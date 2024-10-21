import PropTypes from 'prop-types';

/**
 *
 * @param {string} _localKey
 * @param {object} _data
 * @return Set local storage data.
 */
export const persistLocalStorageUser = (_localKey, _data) => {
  localStorage.setItem(_localKey, JSON.stringify({ ..._data }));
};
persistLocalStorageUser.PropTypes = {
  _localKey: PropTypes.string.isRequired,
  _data: PropTypes.object.isRequired,
}

/**
 *
 * @param {string} _localKey
 * @return Remove localstorage
 */
export const clearLocalStorageUser = (_localKey) => {
  localStorage.removeItem(_localKey);
};
clearLocalStorageUser.PropTypes = {
  _localKey: PropTypes.string.isRequired,
}

/**
 * @return Clear localstorage data
 */
export const clearLocalStorage = () => {
  localStorage.clear();
}
