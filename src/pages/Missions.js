import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from '../components/TableRow';

const Missions = () => {
  let state = useSelector((state) => state.missions);
  if (state.missions) {
    const temp = state.missions;
    state = temp;
  }
  return (
    <table className="mission-table">
      <thead>
        <tr className="table-row first-row">
          <th className="th">Misson</th>
          <th className="th">Description</th>
          <th className="th">Status</th>
          <th className="th">Actions</th>
        </tr>
      </thead>
      <tbody>
        {state.map((item) => {
          const {
            description,
            id,
            name,
            joined,
          } = item;
          return (
            <TableRow
              key={item.id}
              data={{
                description,
                id,
                name,
                joined,
              }}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Missions;
