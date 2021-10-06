import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

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
