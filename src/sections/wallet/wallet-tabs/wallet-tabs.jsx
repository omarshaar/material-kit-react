import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { extractDate } from "src/utils/format-created-dateTime";

const WalletTabs = (props) => {
    const { data } = props;
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="tabs">
              <Tab label="الوارد" {...a11yProps(0)} />
              <Tab label="الصادر" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}> <Incoms data={data.incums} /> </CustomTabPanel>
          <CustomTabPanel value={value} index={1}> <Payouts data={data.payouts} /> </CustomTabPanel>
        </Box>
      );
}

export default WalletTabs;


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
          <Box sx={{ py: 2, px: {xs: 0, sm: 0.5, md: 1} }}>
            {children}
          </Box>
        )}
      </div>
    );
}


function Incoms({data}) {
    return(
        <Grid container spacing={{xs: 2, sm: 3}} >
            { data && data.map( (item, index) => <Grid key={"incum_"+index} xs={6} md={3}><CardIncums item={item} /></Grid> )}
        </Grid>
    )
}

function Payouts({data}) {
    return(
        <Grid container spacing={{xs: 2, sm: 3}} >
            { data && data.map( (item, index) => <Grid key={"payout_"+index} xs={12} md={6}><CardPayouts item={item} /></Grid> )}
        </Grid>
    )
}


function CardIncums({item}) {
    const {amount, created_at, id, percentage, order_hub_id} = item;
    const navigate = useNavigate();

    return(
        <Card onClick={()=> navigate("/order/"+order_hub_id)} sx={{flex: 1, height: {xs: 160, md: 180} , display: "flex", flexDirection: "column", justifyContent: "center", p: {xs: 1, sm: 2, md: 4}, cursor: "pointer"}} >
            <Row title={"المعرف:"} value={id} />
            <Row title={"المبلغ:"} value={amount} />
            <Row title={"النسبة:"} value={percentage + "%"} />
            <Row title={"التاريخ:"} value={extractDate(created_at)} />
        </Card>
    )
}

function CardPayouts({item}) {
    const {amount, created_at, id, type} = item;

    return(
        <Card sx={{flex: 1, height: {xs: 160, md: 180} , display: "flex", flexDirection: "column", justifyContent: "center", p: {xs: 1, sm: 2, md: 4}, cursor: "pointer"}} >
            <Row title={"المعرف:"} value={id} />
            <Row title={"المبلغ:"} value={amount} />
            <Row title={"طريقة السحب:"} value={type} />
            <Row title={"التاريخ:"} value={extractDate(created_at)} />
        </Card>
    )
}

function Row(props) {
    const { title, value } = props;

    return(
        <Box 
            sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                mb: 0.5,
                flexWrap: "wrap"
            }}
        >
            <Typography variant="h6" sx={{fontSize: 14}}> {title} </Typography>
            <Typography variant="subtitle1" sx={{mx: 1, fontSize: 16}} > {value} </Typography>
        </Box>
    )
}