import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, cost) {
  return { name, cost };
}

const rows = [
  createData('CPU', 1.0),
  createData('RAM', 2.0),
  createData('PV', 3.0),
  createData('Total Costs', 4.0)
];

function CostTable() {
  return (
    <TableContainer>
      <Table sx={{ maxWidth: 200 }} aria-label="cost table">
        <TableHead>
          <TableRow>
            <TableCell>Cost Categories</TableCell>
            <TableCell align="right">Costs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CostTable;
