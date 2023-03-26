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
  // calculate monthly costs
  const monthlyCPU = totalCPU * 4;
  const monthlyRAM = totalRAM * 4;
  const monthlyPV = totalPV * 4;
  const monthlyTotal = monthlyCPU + monthlyRAM + monthlyPV;
  // create rows
  const createData = (name, cost) => {
    return { name, cost };
  };
  const rows = [
    createData('CPU', '$' + monthlyCPU.toFixed(2)),
    createData('RAM', '$' + monthlyRAM.toFixed(2)),
    createData('PV', '$' + monthlyPV.toFixed(2)),
    createData('Total', '$' + monthlyTotal.toFixed(2))
  ];
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 700, backgroundColor: '#fff' }}
    >
      <Table sx={{ maxWidth: 700 }} aria-label="cost table">
        {/* set heading*/}
        <TableHead>
          <TableRow sx={{ borderBottom: '2px solid' }}>
            <TableCell
              sx={{ fontSize: 26, fontWeight: 'bold', color: '#0074d9' }}
              align="center"
            >
              Cost Categories
            </TableCell>
            <TableCell
              sx={{ fontSize: 26, fontWeight: 'bold', color: '#0074d9' }}
              align="center"
            >
              Total Costs Per Month
            </TableCell>
          </TableRow>
        </TableHead>
        {/* set rows */}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={{ fontSize: 22 }}
                align="center"
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ fontSize: 22 }} align="center">
                {row.cost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CostTable;
