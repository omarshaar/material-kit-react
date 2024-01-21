import { useLocation, useParams } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
// Hooks
import { useTheme } from '@mui/material/styles';
// components
import UserDataSection from '../user-data-section/user-data-section';

// ----------------------------------------------------------------------

export default function UserDataView() {
  const theme = useTheme();
  const { id } = useParams();
  const { state } = useLocation();

  return (
    <Container maxWidth="xl" sx={{direction: theme.direction.main}}>
      <UserDataSection id={id} />
    </Container>
  );
}
