import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box, Card } from '@mui/material';
// Hooks
import { useTheme } from '@mui/material/styles';
// Coustem Hooks
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
// components
import Iconify from 'src/components/iconify';
import { OrderDetails, Payment, Complated, EditOrder, Failed } from 'src/myComponents';
import { getBalance, getOrder } from 'src/services/orders';
import WalletCard from '../wallet-card/WalletCard';
import AriaBasicChart from 'src/charts/aria-basic-chart/aria-basic-chart';
import WalletTabs from '../wallet-tabs/wallet-tabs';


const WalletSection = (props) => {
    const { theme } = props;
    const [ data, setData ] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    function getData() {
        getBalance().then(res => {
            if (res.success == true) { setData(res.data); }
        })
    }
    

    return (
        <Grid container spacing={{xs: 2, sm: 3, md: 4}} sx={{flexDirection: {sm: "row-reverse"}}}>
            <Grid xs={15} md={4}> <WalletCard data={data} /> </Grid>
            <Grid xs={15} md={8}> <Card  sx={{flex: 1,height: 200, py: 1, borderRadius: 1}}> <AriaBasicChart data={data} /> </Card> </Grid>
            <Grid xs={15}> <WalletTabs data={data} /> </Grid>
        </Grid>
    );
}

export default WalletSection;

