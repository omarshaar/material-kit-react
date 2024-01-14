import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button } from '@mui/material';
// Hooks
import { useTheme } from '@mui/material/styles';
// Coustem Hooks
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
// components
import Iconify from 'src/components/iconify';
import { RasidCard, TranslatorCard, AuthsCard, VisaCard, IsloadingSection } from "src/myComponents";
import OrdersSection from '../orders-section/orders-section';
import { getOrders } from 'src/services/orders';

// ----------------------------------------------------------------------

export default function OrdersView() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { id } = useParams();
  const [ orders, setOrders ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ ordersFillters, setOrdersFillters ] = useState({
    page: 1,
    perPage: 10
  });
  const [ selectedOrdersCategory, setSelectedOrdersCategory ] = useState(id || "all");
  const  categoryOptions = [
    {
      lable: "جميع الطلبات",
      value: "all",
    },
    {
      lable: "قيد التنفيذ",
      value: "inprogress",
    },
    {
      lable: "طلبات اليوم",
      value: "today",
    },
    {
      lable: "الطلبات المدفوعة",
      value: "paid",
    },
    {
      lable: "الطلبات المكتملة",
      value: "complated",
    },
    {
      lable: "فشل التنفيذ",
      value: "faild",
    },

  ];
  useEffect(()=>{ handleRouteName(); },[]);

  useEffect(()=>{
    handleGetOrders(id);
  },[id]);

  const handleRouteName = () => { 
    let invalideRouteName = true;
    categoryOptions.forEach((item)=> {if(item.value == id) invalideRouteName = false})
    !invalideRouteName && setSelectedOrdersCategory(id);
  };

  const handleGetOrders = () => {
    setLoading(true);
    setOrders([]);

    getOrders(ordersFillters, id).then(res=> {
      if (res.success == "true") {
        setOrders(res.data);
      }
      setLoading(false);
    });
  }



  return (
    <Container maxWidth="xl" sx={{direction: theme.direction.main}}>

      <Typography variant="h4" sx={{ mb: useResponsiveSizes(1, 1, undefined, "md")}}> الطلبات </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1, mb: useResponsiveSizes(1, 1, undefined, "md") }} >
        <TextField select size="medium" value={selectedOrdersCategory} onChange={(e)=>{setSelectedOrdersCategory(e.target.value); navigate(`/orders/${e.target.value}`)}} sx={{flex: 1,}} >
          { categoryOptions.map((item, index) => <MenuItem key={"option_"+index} value={item.value} sx={{direction: theme.direction.main}}> {item.lable} </MenuItem> ) }
        </TextField>
        <Button variant="contained" color="inherit" sx={{height: 54, marginRight: 2}} >
          <Iconify icon="clarity:filter-solid" />
        </Button>
      </Box>

      { !loading && orders.length > 0 && <OrdersSection orders={orders} /> }
      { loading && <IsloadingSection sx={{height: "45vh"}} /> }
      { !loading && orders.length <= 0 &&  <Box sx={{flex: 1, height: "50vh", display: "flex", justifyContent: "center", alignItems: "center"}} ><Typography> لايوجد طلبات </Typography></Box> }
      
    </Container>
  );
}
