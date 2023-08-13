'use client';

import { useState } from 'react';

import Td from './components/Td';
import Th from './components/Th';

import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('dsgdsg', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('65465464 yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('dsgdfsgds', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

const columns = [
  'Dessert',
  'Fat',
  'Carbs',
  'Protein',
  'Calories',
  'Carbs',
  'Protein',
  'Calories',
  'Enviar PDF'
];

export default function CrmTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="duplicatas">
        <TableHead sx={{ backgroundColor: 'primary.main' }}>
          <TableRow>
            {columns.map((column, index) => (
              <Th key={index}>{column}</Th>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: 'background.main' }}>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.name}>
                <Td>{row.name}</Td>
                <Td>{row.calories}</Td>
                <Td>{row.fat}</Td>
                <Td>{row.carbs}</Td>
                <Td>{row.protein}</Td>
                <Td>{row.carbs}</Td>
                <Td>{row.protein}</Td>
                <Td>{row.protein}</Td>
                <Td>
                  <Button
                    variant="contained"
                    sx={{ padding: '7px 0' }}
                    disableElevation
                    color="success"
                    size="small"
                  >
                    <EmailIcon />
                  </Button>
                </Td>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="Linhas por Página"
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ backgroundColor: 'background.main' }}
      />
    </TableContainer>
  );
}
