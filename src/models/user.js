import PropTypes from 'prop-types';

function CreateUserDataForContext() {
  return {
    id: "",
    username: "Guest",
    email: "guest@gmail.com",
    avatarURL: 'https://avatars.githubusercontent.com/u/6643122?v=4',
    role: {
      name: 'Guest',
      slug: 'guest',
    }
  }
}

/**
 * Constructor for an authenticated user object.
 *
 * @param {string} _id - The unique identifier of the user.
 * @param {string} _name - The username of the user.
 * @param {string} _email - The email associated with the account.
 *
 * @returns {{name: string, id: string, email: string}} - An object containing the user's information.
 * @constructor
 */
function ConstructUserDataForStorage(_id, _name, _email){
  return {
    id: _id,
    name: _name,
    email: _email,
  }
}

ConstructUserDataForStorage.PropTypes = {
  _id: PropTypes.string.isRequired,
  _name: PropTypes.string.isRequired,
  _email: PropTypes.string.isRequired,
}

export {
  CreateUserDataForContext,
  ConstructUserDataForStorage
}