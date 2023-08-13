'use client';

import CrmButton from '@/components/buttons/CrmButton';
import CrmForm from '@/components/form/CrmForm';
import CrmInputDate from '@/components/inputs/CrmInputDate';
import CrmInputText from '@/components/inputs/CrmInputText';
import CrmBase from '@/components/layout/CrmBase';
import CrmContainer from '@/components/layout/CrmContainer';
import CrmTable from '@/components/table/CrmTable';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Home() {
  const handleSearchDuplicata = (data: object) => {
    console.log(data);
  };

  const handleFiltersDuplicatas = (data: object) => {
    console.log(data);
  };

  return (
    <CrmContainer>
      <Typography variant="h1" mb={3} color="primary.main">
        Boletos 2º via
      </Typography>
      <CrmBase>
        <Stack
          direction={{ sx: 'column', mid: 'row' }}
          justifyContent={{ md: 'space-between' }}
          mb={4}
        >
          <Box width={{ mid: '55%' }} mb={{ xs: 2, mid: 0 }}>
            <Typography variant="overline" fontWeight="bold" mb={1}>
              Filtrar por períodos de vencimento
            </Typography>
            <CrmForm onSubmit={handleFiltersDuplicatas}>
              <CrmInputDate
                label="Data Inicial"
                name="dataInicial"
                rules={{ required: 'Esse campo é obrigátorio' }}
                customCss={{
                  display: { xs: 'block', sm: 'inline-flex' },
                  marginRight: { sm: '1em' }
                }}
              />
              <CrmInputDate
                label="Data Final"
                name="dataFinal"
                rules={{ required: 'Esse campo é obrigátorio' }}
                customCss={{
                  display: { xs: 'block', sm: 'inline-flex' },
                  marginRight: { sm: '1em' },
                  marginBottom: { xs: '1em', sm: '0' }
                }}
              />
              <CrmButton
                text={<FilterAltIcon />}
                type="submit"
                customCss={{
                  width: { xs: '100%', sm: 'auto' }
                }}
              />
            </CrmForm>
          </Box>
          <Box width={{ mid: '35%' }} mb={{ xs: 2, mid: 0 }}>
            <Typography variant="overline" fontWeight="bold" mb={1}>
              Pesquisar por duplicata
            </Typography>
            <CrmForm onSubmit={handleSearchDuplicata}>
              <Box sx={{ paddingTop: '8px' }}>
                <CrmInputText
                  name="codigo"
                  label="Código"
                  rules={{ required: 'Esse campo é obrigátorio' }}
                  customCss={{
                    width: { xs: '100%', sm: 'auto' },
                    marginBottom: { xs: '1em', sm: '0' },
                    marginRight: { sm: '1em' }
                  }}
                />
                <CrmButton
                  text={<SearchIcon />}
                  type="submit"
                  customCss={{
                    width: { xs: '100%', sm: 'auto' }
                  }}
                />
              </Box>
            </CrmForm>
          </Box>
          <Box
            width={{ mid: '10%' }}
            display="flex"
            justifyContent={{ mid: 'flex-end' }}
            alignSelf={{ mid: 'flex-end' }}
          >
            <CrmButton
              text="Limpar"
              startIcon={<DeleteIcon />}
              color="red"
              customCss={{
                width: { xs: '100%', sm: 'auto' },
                marginTop: { xs: '1em', sm: '0' }
              }}
            />
          </Box>
        </Stack>
        <Box>
          <CrmTable />
        </Box>
      </CrmBase>
    </CrmContainer>
  );
}
