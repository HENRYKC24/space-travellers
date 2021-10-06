import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  let rockets = useSelector((state) => state.rockets);
  if (!Array.isArray(rockets)) {
    rockets = [];
  } else {
    rockets = rockets.filter((rocket) => rocket.reserved);
  }
  return (
    <div className="reserve">
      <h1>My Rockets</h1>
      <ul className="profile-rockets">
        {rockets.length > 0 ? rockets.map((rocket) => (
          <li key={rocket.id} rocket={rocket}><b>{rocket.rocketName}</b></li>
        )) : null}
      </ul>
      {!rockets.length && <p>No Rockets Reserved</p>}
    </div>
  );
};

export default ReservedRockets;
