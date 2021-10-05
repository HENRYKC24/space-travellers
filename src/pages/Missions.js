import { useSelector } from 'react-redux';
import MissionTableRow from './MissionTableRow';

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
            <MissionTableRow mission={mission} key={mission.id} />
          )) : 'No Missions'}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
