import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
import { getOrder } from 'src/services/orders';


const OrderSection = (props) => {
    const { id, data } = props;
    const [ orderData, setOrderData ] = useState(data);

    useEffect(()=>{ getData(data); },[data]);

    function getData(data) {
        if(data && !data.reload) return;
        getOrder(id).then(res=> {
            if (res.success == true) { setOrderData(res.data[0]); }
        })
    }


    return (
        <Grid container spacing={3}>
            {
                orderData && <>
                    <Grid xs={12}><OrderDetails data={orderData} /></Grid>
                    { !orderData.complated && <Grid xs={12} md={6}><Complated data={{"id": orderData.id, "type": orderData.order_type, "hubID": orderData.hubID}} /></Grid>}
                    <Grid xs={12} md={ orderData.complated ? 12 : 6}><Payment data={{"id": orderData.id, "type": orderData.order_type, "hubID": orderData.hubID}} /></Grid>
                    <Grid xs={12}><EditOrder data={{"id": orderData.id, "type": orderData.order_type, "hubID": orderData.hubID}} /></Grid>
                    <Grid xs={12} ><Failed data={{"id": orderData.id, "type": orderData.order_type, "hubID": orderData.hubID}} /></Grid>
                </>
            }
        </Grid>
    );
}

export default OrderSection;