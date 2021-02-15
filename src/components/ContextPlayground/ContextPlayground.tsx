import React from 'react';
import UserDetail from './UserDetail';

const user = {
  firstName: 'Ivo',
  lastName: 'Benedito',
  data: 'This is some sample data',
};

const UserContext = React.createContext({});
export const UserConsumer = UserContext.Consumer;

const ContextPlayground = () => {
  return (
    <React.Fragment>
      <UserContext.Provider value={user}>
        ola mundo!
        <UserDetail />
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default ContextPlayground;
