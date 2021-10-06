import { useSelector } from 'react-redux';

const MyMissionProfile = () => {
  let missions = useSelector((state) => state.missions);
  if (!Array.isArray(missions)) {
    missions = [];
  } else {
    missions = missions.filter((mission) => mission.joined);
  }
  return (
    <div>
      <ul className="profile-missions">
        {missions.length > 0 ? missions.map((mission) => (
          <li key={mission.id} mission={mission}><b>{mission.name}</b></li>
        )) : 'No Mission Joined'}
      </ul>
    </div>
  );
};

export default MyMissionProfile;
