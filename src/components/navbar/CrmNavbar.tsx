import CrmContainer from '../layout/CrmContainer';

import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

export default function CrmNavbar() {
  return (
    <Box component="header" sx={{ bgcolor: 'primary.main', padding: '1em 0' }}>
      <nav>
        <CrmContainer>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={{ xs: 'center', sm: 'space-between' }}
            alignItems="center"
          >
            <Typography variant="h1" color="white.main">
              Portal Boletos
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h6" color="white.main">
                Razão Social Cliente
              </Typography>
              <Tooltip
                title="Sair"
                sx={{
                  color: 'white.main',
                  '&:hover': { bgcolor: 'indigo.main' },
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                <IconButton size="large">
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
          <Tooltip
            title="Sair"
            sx={{
              color: 'white.main',
              '&:hover': { bgcolor: 'indigo.main' },
              bgcolor: 'indigo.main',
              position: 'absolute',
              top: 0,
              right: 0,
              display: { sm: 'none' },
              margin: '8px'
            }}
          >
            <IconButton size="large">
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </CrmContainer>
      </nav>
    </Box>
  );
}
