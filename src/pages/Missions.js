import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  return (
    <div className="mission-page">
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.length > 0 ? missions.map((mission) => (
            <tr key={mission.id}>
              <td><b>{mission.name}</b></td>
              <td>{mission.description}</td>
              <td>
                <button onClick={() => dispatch(joinMission(mission.id))} type="button" className={mission.joined ? 'joined-mission btn' : 'unjoined-mission btn'}>
                  {mission.joined ? 'Leave' : 'Join'}
                  {' '}
                  Mission
                </button>
              </td>
            </tr>
          )) : 'No Missions'}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
