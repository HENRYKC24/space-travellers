import { useSelector } from 'react-redux';
import SingleRocket from './SingleRocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div>
      <ul className="rockets-container">
        {rockets.length > 0 ? rockets.map((rocket) => (
          <SingleRocket key={rocket.id} rocket={rocket} />
        )) : 'No Rockets'}
      </ul>
    </div>
  );
};

export default Rockets;
