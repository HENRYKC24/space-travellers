import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const MissionTableRow = ({ mission }) => {
  const dispatch = useDispatch();

  const {
    id, name, description, joined,
  } = mission;

  return (
    <tr key={id}>
      <td><b>{name}</b></td>
      <td>{description}</td>
      <td>
        <button
          onClick={() => dispatch(joinMission(id))}
          type="button"
          className={joined ? 'joined-mission btn' : 'unjoined-mission btn'}
        >
          {joined ? 'Leave' : 'Join'}
          {' '}
          Mission
        </button>
      </td>
    </tr>
  );
};

export default MissionTableRow;
