import React from 'react';
import ReservedRockets from './ReservedRockets';
import MyMissionProfile from '../components/MyMissionProfile';

const MyProfile = () => (
  <div className="profile-container">
    <MyMissionProfile />
    <ReservedRockets />
  </div>
);

export default MyProfile;
