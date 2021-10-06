import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import TableData from './TableData';
import Styles from './TableRow.module.css';
import { leaveJoinMission } from '../redux/missions/missions';

const TableRow = ({ data }) => {
  const {
    member,
    notMember,
    active,
    inactive,
  } = Styles;
  const {
    description,
    id,
    name,
    joined,
  } = data;
  const dispatch = useDispatch();
  const jOrL = () => dispatch(leaveJoinMission(id));
  const leaveOrJoin = joined ? 'Leave' : 'Join';
  const Button = (<button onClick={jOrL} className={joined ? member : notMember} type="button">{`${leaveOrJoin} Mission`}</button>);
  const Span = (<span className={joined ? active : inactive}>{joined ? 'Active Member' : 'NOT A MEMBER'}</span>);
  return (
    <tr className="table-row">
      {[name, description, Span, Button].map((item) => (
        <TableData key={uuidv4()} id={id} data={item} />
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};

export default TableRow;
