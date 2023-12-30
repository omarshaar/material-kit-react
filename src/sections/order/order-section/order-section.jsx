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
import { OrderDetails, Payment, Complated, EditOrder, Failed } from 'src/myComponents';


const OrderSection = (props) => {
    const { id } = props;

    return (
        <Grid container spacing={3}>
            <Grid xs={12}><OrderDetails /></Grid>
            <Grid xs={12} md={6}><Complated /></Grid>
            <Grid xs={12} md={6}><Payment /></Grid>
            <Grid xs={12}><EditOrder /></Grid>
            <Grid xs={12} ><Failed /></Grid>
        </Grid>
    );
}

export default OrderSection;