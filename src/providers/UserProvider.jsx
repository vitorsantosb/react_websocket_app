import { createContext, useContext, useEffect, useState } from 'react';
import { ConstructUserDataForStorage } from '@/models/user.js';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { GetUserData, Userlogin } from '@/services/routes/user/user.routes.js';
import { StorageCookie } from '@/config/cookies/cookieConfig.js';
import { persistLocalStorageUser } from '@/config/localStorage/localStorage.js';
import { ConnectSocket, DisconnectSocket } from '../services/websocket/websocket';

const UserContext = createContext({ user: null });

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);
  
  const storeUserData = (_user) => {
    return new Promise((resolve, reject) => {
      if (_user) {
        const _userForStorage = ConstructUserDataForStorage(_user.id, _user.name, _user.email);
        //store on local storage
        persistLocalStorageUser('_currentUser', _userForStorage);
        //set user variable
        const _socket = ConnectSocket();
        console.log(_socket);
        setSocket(_socket); 
        
        setUser(_userForStorage);
        resolve(true);
      } else {
        reject(false);
        Swal.fire({
          icon: 'error',
          title: 'Falha interna no app!',
          text: 'Contate um administrador',
        });
      }
    });
  };
  
  const validateUserLogin = async (_userData) => {
    const _response = await Userlogin(_userData);
    
    if (_response.statusCode === 200) {
      const _userResponse = await GetUserData();
      if (_userResponse.statusCode === 200) {
        const _result = await storeUserData(_userResponse.user);
        if (_result) {
          console.log('Successfully store user data and complete the login query');
          return true;
        }
        return false;
      } else {
        return new Error(_response);
      }
    }
  };

  const logoutCurrentUser = () => {
    setUser(null);
    setSocket(null);
    localStorage.removeItem('_currentUser');
    DisconnectSocket();
    
    //return true for succesfully disconnected user from api and clear all cookies in this page;
    return true;
  }

  validateUserLogin.propTypes = {
    _userData: PropTypes.object.isRequired,
  };
  //Criar logica de login de usuário
  useEffect(() => {
  
  }, [user]);
  
  return <UserContext.Provider
    value={{
      user,
      validateUserLogin,
      logoutCurrentUser,
      socket
    }}
  >
    {children}
  </UserContext.Provider>;
}

//hook
export const useUser = () => {
  return useContext(UserContext);
};