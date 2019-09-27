import React from 'react';

const ProfileWidget = ({ first, last }) => {
  return (
    <div>
      <h1>{`${first} ${last}`}</h1>
    </div>
  );
};

export default ProfileWidget;
