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
    createData('CPU', '$' + totalCPU),
    createData('RAM', '$' + totalRAM),
    createData('PV', '$' + totalPV),
    createData('Test', '$' + 3.0)
  ];
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 700, backgroundColor: '#fff' }}
    >
      <Table sx={{ maxWidth: 700 }} aria-label="cost table">
        {/* set heading */}
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
              Total Costs Per Week
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
