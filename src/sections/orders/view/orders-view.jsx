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
import OrdersSection from '../orders-section/orders-section';

// ----------------------------------------------------------------------

export default function OrdersView() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { id } = useParams();
  const [ selectedOrdersCategory, setSelectedOrdersCategory ] = useState("all");
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

  const handleRouteName = () => { 
    let invalideRouteName = true;
    categoryOptions.forEach((item)=> {if(item.value == id) invalideRouteName = false})
    !invalideRouteName && setSelectedOrdersCategory(id);
  };



  return (
    <Container maxWidth="xl" sx={{direction: theme.direction.main}}>

      <Typography variant="h4" sx={{ mb: useResponsiveSizes(1, 1, undefined, "md")}}> الطلبات </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1, mb: useResponsiveSizes(1, 1, undefined, "md") }} >
        <TextField select size="medium" value={selectedOrdersCategory} onChange={(e)=>{setSelectedOrdersCategory(e.target.value); navigate(`/orders/${e.target.value}`)}} sx={{flex: 1,}} >
          { categoryOptions.map((item, index) => <MenuItem key={"option_"+index} value={item.value} sx={{direction: theme.direction.main}}> {item.lable} </MenuItem> ) }
        </TextField>
      </Box>

      <OrdersSection />
      
    </Container>
  );
}
