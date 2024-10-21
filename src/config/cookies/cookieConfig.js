import Cookies from "js-cookie";
import PropTypes from 'prop-types';

/**
 * Function for Get cookie data
 * @param {string} _cookieName
 * @returns Object with cookie data
 * @constructor
 */
function GetCookie(_cookieName){
  return Cookies.get(_cookieName);
}
GetCookie.PropTypes = {
  _cookieName: PropTypes.string.isRequired
}

/**
 *
 * @param {string} _cookieKey
 * @param {object} _cookieData
 * @returns Cookie storage on navigator.
 * @constructor
 */
function StorageCookie( _cookieKey, _cookieData){
  return Cookies.set(_cookieKey, _cookieData);
}
StorageCookie.PropTypes = {
  _cookieName: PropTypes.string.isRequired,
  _cookieData: PropTypes.object.isRequired
}

/**
 *
 * @param {string} _cookieKey
 * @returns Clear navigator cookies
 * @constructor
 */
function ClearCookieData(_cookieKey){
  return Cookies.remove(_cookieKey);
}
ClearCookieData.PropTypes = {
  _cookieName: PropTypes.string.isRequired,
}


export {
  GetCookie,
  StorageCookie,
  ClearCookieData
}