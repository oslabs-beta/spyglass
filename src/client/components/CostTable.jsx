import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

function CostTable({ totalCPU, totalRAM, totalPV }) {
  const createData = (name, cost) => {
    return { name, cost };
  };
  console.log('totalCPU here: ', totalCPU);
  const rows = [
    createData('CPU', totalCPU),
    createData('RAM', totalRAM),
    createData('PV', totalPV),
    createData('test', 3.0)
  ];
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
      <Table sx={{ maxWidth: 400 }} aria-label="cost table">
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
