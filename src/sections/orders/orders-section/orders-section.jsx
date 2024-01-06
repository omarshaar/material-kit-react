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


const OrdersSection = ({orders}) => {
    const navigate = useNavigate();

    function handleOpenOrder(item) {
        navigate('/order/'+item.hubID, { state: item });
    }


    return (
        <Grid container spacing={useResponsiveSizes(0, 1.5, "xs", "sm")}>
            {   orders &&
                orders.map((item, index) => {
                    if (item.order_type == "rasid") return <Grid xs={15} md={6} key={"rasid_" + item.id}><RasidCard data={item} callBack={()=> handleOpenOrder(item)} /></Grid>
                    else if (item.order_type == "server_translation") return <Grid xs={15} md={6} key={"server_translation_" + item.id}><TranslatorCard data={item} callBack={()=> handleOpenOrder(item)} /></Grid>
                    else if (item.order_type == "server_auth") return <Grid xs={15} md={6} key={"server_auth_" + item.id}><AuthsCard data={item} callBack={()=> handleOpenOrder(item)} /></Grid>
                    else if (item.order_type == "server_visa") return <Grid xs={15} md={6} key={"server_visa_" + item.id}><VisaCard data={item} callBack={()=> handleOpenOrder(item)} /></Grid>
                })
            }
        </Grid>
    );
}

export default OrdersSection;