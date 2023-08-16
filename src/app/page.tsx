'use client';

import CrmButton from '@/components/buttons/CrmButton';
import CrmInputDate from '@/components/form/components/inputs/CrmInputDate';
import CrmInputText from '@/components/form/components/inputs/CrmInputText';
import CrmForm from '@/components/form/CrmForm';
import CrmBase from '@/components/layout/CrmBase';
import CrmContainer from '@/components/layout/CrmContainer';
import CrmTable from '@/components/table/CrmTable';

import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Home() {
  const handleFiltersDuplicatas = (data: object) => {
    console.log(data);
  };

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
          <Stack direction={{ mid: 'row' }}>
            <Box sx={{ width: { xs: '100%', mid: '50%', lg: '40%' } }}>
              <Typography variant="overline" fontWeight="bold" display="block">
                Períodos de vencimento
              </Typography>
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
            </Box>
            <Box
              sx={{
                width: { xs: '100%', mid: '50%', lg: '60%' },
                marginTop: { xs: '1.7em', mid: '0' }
              }}
            >
              <Typography variant="overline" fontWeight="bold" display="block">
                Duplicata
              </Typography>
              <Stack
                justifyContent={{ mid: 'space-between' }}
                marginTop="8px"
                flexDirection={{ sm: 'row' }}
              >
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
                <Box>
                  <CrmButton
                    text="Pesquisar"
                    startIcon={<SearchIcon />}
                    type="submit"
                    customCss={{
                      width: { xs: '100%', sm: 'auto' },
                      marginRight: '1em'
                    }}
                  />
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
            </Box>
          </Stack>
        </CrmForm>
        {/*<CrmTable />*/}
      </CrmBase>
    </CrmContainer>
  );
}
