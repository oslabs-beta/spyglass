import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function CostTable({ totalCPU, totalRAM, totalPV }) {
  const createData = (name, cost) => {
    return { name, cost };
  };
  const rows = [
    createData('CPU', totalCPU),
    createData('RAM', totalRAM),
    createData('PV', totalPV),
    createData('test', 3.0)
  ];
  return (
    <TableContainer>
      <Table sx={{ maxWidth: 300 }} aria-label="cost table">
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
