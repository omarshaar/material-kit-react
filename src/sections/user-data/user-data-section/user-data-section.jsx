import PropTypes from 'prop-types';
import { forwardRef, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// MUI
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box, Card } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// Hooks
import { useTheme } from '@mui/material/styles';
// Coustem Hooks
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
// components
import Iconify from 'src/components/iconify';
import { extractDate } from 'src/utils/format-created-dateTime';
import OrdersSection from 'src/sections/orders/orders-section/orders-section';
import { getUserData } from 'src/services/orders';


const UserDataSection = (props) => {
    const { id } = props;
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);
    const { adress, orders, statistics, user} = data;
 
    useEffect(()=> getData() ,[]);

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    function getData(){
        getUserData(id).then(res => {
            console.log(res);
            res.data && setData(res.data);
        });
    }

    return (
        <Grid container spacing={3}>
            <Grid xs={12} md={6} >
                <Box>
                    <Typography variant="h6" sx={{ mb: useResponsiveSizes(0, 0.5, undefined, "md")}}>  بيانات المستخدم </Typography>
                    <DataCard data={user} user_currency={statistics && statistics.user_currency} />
                </Box>
            </Grid>

            <Grid xs={12} md={6} >
                <Box>
                    <Typography variant="h6" sx={{ mb: useResponsiveSizes(0, 0.5, undefined, "md")}}> العنوان </Typography>
                    { adress && <AdressCard data={adress} />}
                </Box>
            </Grid>

            <Grid xs={12} >
                <Box>
                    <Typography variant="h6" sx={{ mb: useResponsiveSizes(0, 0.5, undefined, "md")}}> الطلبات </Typography>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={(e, v) => setValue(v)} aria-label="user orders tab">
                                <Tab label="الطلبات المدفوعة" {...a11yProps(0)} />
                                <Tab label="السلة" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            {  orders && <OrdersSection orders={orders.paid} /> }
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            {  orders && <OrdersSection orders={orders.cart} /> }
                        </CustomTabPanel>
                    </Box>
                </Box>
            </Grid>


        </Grid>
    );
}

export default UserDataSection;


function DataCard(props) {
    const { data, user_currency } = props;

    return(
        <Card sx={{p: {xs: 2, md: 4}, pb: {xs: {xs: 2, md: 4}, md: 11}}}>
            <Row title="الاسم:" value={data && data.user_full_name} />
            <Row title="الايميل:" value={data && data.user_email} />
            { data && <Row title="تاريخ التسجيل:" value={extractDate(data.user_register_date)} />}
            <Row title="العملة:" value={user_currency} />
        </Card>
    )
}

function AdressCard(props) {
    const { data } = props;
    const { user_country, user_city, user_street, user_house_number, zip_code, updated_at } = data;

    return(
        <Card sx={{p: {xs: 2, md: 4}}}>
            <Row title="الدولة:" value={user_country} />
            <Row title="المدينة:" value={user_city} />
            <Row title="الشارع:" value={user_street} />
            <Row title="رقم المنزل:" value={user_house_number} />
            <Row title="الرمز البريدي:" value={zip_code} />
            { updated_at && <Row title="اخر تعديل:" value={extractDate(updated_at)} />}
        </Card>
    )
}

const Row = forwardRef(({title, value}, ref)=>
    <Box component={"div"} sx={{display: "flex", alignItems: "center", mb: 0.5}} ref={ref}>
        <Typography variant="subtitle1" sx={{fontSize: useResponsiveSizes(10, 2, "xs", "md")}} > {title} </Typography>
        <Typography variant="h1"sx={{fontSize: useResponsiveSizes(10, 2, "xs", "md"), px: 1.5, color: "secondary.main"}} > {value} </Typography>
    </Box>
); 

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

