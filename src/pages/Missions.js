import { useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

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
                <button type="button" className={mission.joined ? 'joined-mission' : 'unjoined-mission'}>
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
