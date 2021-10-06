import { useDispatch } from 'react-redux';
import { addRevervation } from '../redux/rockets/rockets';

const SingleRocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    rocketImage, rocketName, reserved, description,
  } = rocket;

  return (
    <li className="single-rocket">
      <div className="rocket-image">
        <img src={rocketImage} alt={rocket.rocketName} width="300" height="200" />
      </div>
      <div className="rocket-desc">
        <span><b>{rocketName}</b></span>
        <span>
          {reserved && <small className="rocket-reserved">Reserved</small>}
          {description}
        </span>
        <span>
          <button
            onClick={() => dispatch(addRevervation(rocket.id))}
            type="button"
            className={reserved ? 'rocket-btn-reserved' : 'rocket-btn'}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </span>
      </div>
    </li>
  );
};

export default SingleRocket;
