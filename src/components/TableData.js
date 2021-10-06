import React from 'react';
import propTypes from 'prop-types';

const TableData = ({ data }) => (<td className="table-data">{data}</td>);

TableData.propTypes = {
  data: propTypes.string.isRequired,
};

export default TableData;
