import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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



const OrdersSection = () => {
    return (
        <Grid container spacing={useResponsiveSizes(0, 1.5, "xs", "sm")}>
            <Grid xs={15} md={6}><RasidCard /></Grid>
            <Grid xs={15} md={6}><RasidCard /></Grid>
            <Grid xs={15} md={6}><TranslatorCard /></Grid>
            <Grid xs={15} md={6}><TranslatorCard /></Grid>
            <Grid xs={15} md={6}><AuthsCard /></Grid>
            <Grid xs={15} md={6}><VisaCard /></Grid>
        </Grid>
    );
}

export default OrdersSection;