import { useState } from 'react';

import Td from './components/Td';
import Th from './components/Th';

import { IDuplicatas } from '@/interfaces/duplicatas';

import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Props {
  rows: Array<IDuplicatas>;
}

export default function CrmTable({ rows }: Props) {
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
            <Th>Data de Emissão</Th>
            <Th>Duplicata</Th>
            <Th>Parcela</Th>
            <Th>Nosso Número</Th>
            <Th>Data de Vencimento</Th>
            <Th>Valor</Th>
            <Th>Banco</Th>
            <Th>Enviar PDF</Th>
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: 'background.main' }}>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.id}>
                <Td>{row.emissao}</Td>
                <Td>{row.duplicata}</Td>
                <Td>{row.parcela}</Td>
                <Td>{row.nosso_numero}</Td>
                <Td>{row.vencimento}</Td>
                <Td>{row.valor}</Td>
                <Td>{row.banco}</Td>
                <Td>
                  <Button
                    variant="contained"
                    sx={{ padding: '10px 0' }}
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
