import React from 'react';
import { UserConsumer } from './ContextPlayground';

const UserDetail = () => {
  return (
    <React.Fragment>
      <UserConsumer>
        {({ firstName, lastName, data }) => (
          <div>
            <dl>
              <dt>First Name</dt>
              <dd>{ firstName }</dd>

              <dt>Last Name</dt>
              <dd>{ lastName }</dd>

              <dt>Data</dt>
              <dd>{ data }</dd>
            </dl>
          </div>
        )}
      </UserConsumer>
    </React.Fragment>
  );
};

export default UserDetail;
