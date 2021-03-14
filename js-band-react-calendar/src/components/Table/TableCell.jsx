import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

const TableCell = ({ data }) => <td className="table__cell">{data}</td>;

TableCell.propTypes = {
  data: ReactRouterPropTypes.match.isRequired,
};

export default TableCell;
