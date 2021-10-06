import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  let rockets = useSelector((state) => state.rockets);
  if (!Array.isArray(rockets)) {
    rockets = [];
  } else {
    rockets = rockets.filter((rocket) => rocket.reserved);
  }
  return (
    <div>
      <ul className="profile-rockets">
        {rockets.length > 0 ? rockets.map((rocket) => (
          <li key={rocket.id} rocket={rocket}><b>{rocket.rocketName}</b></li>
        )) : 'No Rockets Reserved'}
      </ul>
    </div>
  );
};

export default ReservedRockets;
