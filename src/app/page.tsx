'use client';

import CrmButton from '@/components/buttons/CrmButton';
import CrmInputDate from '@/components/form/components/inputs/CrmInputDate';
import CrmInputText from '@/components/form/components/inputs/CrmInputText';
import CrmForm from '@/components/form/CrmForm';
import CrmBase from '@/components/layout/CrmBase';
import CrmContainer from '@/components/layout/CrmContainer';
import CrmLoading from '@/components/layout/CrmLoading';
import CrmTable from '@/components/table/CrmTable';

import PortalServices from '@/services/PortalServices';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Home() {
  const {
    data,
    error,
    isLoading,
    handleFilterDuplicates,
    handleSearchDuplicate
  } = PortalServices();

  return (
    <CrmContainer>
      <Typography variant="h1" mb={3} color="primary.main">
        Boletos 2º via
      </Typography>
      <CrmBase>
        <CrmForm
          onSubmit={handleFiltersDuplicatas}
          customCss={{
            marginBottom: '2em'
          }}
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
                  marginRight: { sm: '1em' }
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
                    marginBottom: { xs: '2em', sm: '0' },
                    marginRight: { xs: '1em', mid: '0' }
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
