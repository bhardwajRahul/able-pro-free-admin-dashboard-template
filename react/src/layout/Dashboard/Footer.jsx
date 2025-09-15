import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

export default function Footer() {
  return (
    <Stack direction={{ sm: 'row' }} sx={{ gap: 1, justifyContent: 'space-between', alignItems: 'center', pt: 3, mt: 'auto' }}>
      <Typography variant="caption">&copy; Able Pro crafted with ♥ by Team Phoenixcoded</Typography>
      <Stack direction="row" sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: 'center' }}>
        <Link component={RouterLink} to="https://ableproadmin.com" target="_blank" variant="caption" color="text.primary">
          Home
        </Link>
        <Link component={RouterLink} to="https://phoenixcoded.gitbook.io/able-pro" target="_blank" variant="caption" color="text.primary">
          Documentation
        </Link>
        <Link component={RouterLink} to="https://phoenixcoded.authordesk.app/" target="_blank" variant="caption" color="text.primary">
          Support
        </Link>
      </Stack>
    </Stack>
  );
}
