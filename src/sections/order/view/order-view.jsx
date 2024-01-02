import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
// Hooks
import { useTheme } from '@mui/material/styles';
// Coustem Hooks
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
// components
import Iconify from 'src/components/iconify';
import { RasidCard, TranslatorCard, AuthsCard, VisaCard } from "src/myComponents";
import OrderSection from '../order-section/order-section';


// ----------------------------------------------------------------------

export default function OrderView() {
  const theme = useTheme();
  const { id } = useParams();
  const { state } = useLocation();
  
  return (
    <Container maxWidth="xl" sx={{direction: theme.direction.main}}>
      {/* <Typography variant="h4" sx={{ mb: useResponsiveSizes(1, 1, undefined, "md")}}> الطلبات </Typography> */}
      <OrderSection id={id} data={state} />
    </Container>
  );
}
