import { Box, Grid, Typography } from "@mui/material";
// Hooks
import { useTheme } from '@mui/material/styles';
import { forwardRef, useEffect } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import SectionCard from "src/myComponents/order-page-components/SectionCard";
import { AuthsCard, RasidCard, TranslatorCard, VisaCard } from "..";

const OrderDetails = (props) => {
    const theme = useTheme();
    const { sx, data } = props

    return (
        <>
        {
            data.order_type == "rasid" ? <RasidCard data={data} details={true} />
            : data.order_type == "server_translation" ? <TranslatorCard data={data} details={true} />
            : data.order_type == "server_auth" ? <AuthsCard data={data} details={true} />
            : data.order_type == "server_visa" ? <VisaCard data={data} details={true} /> : <></>
        }
        </>
    );
}

export default OrderDetails;


const Row = forwardRef(({title, value, icon, color}, ref)=>
    <Box component={"div"} sx={{display: "flex", alignItems: "center", mb: 0.5}} ref={ref}>
        <Typography variant="subtitle1" sx={{fontSize: useResponsiveSizes(10, 2, "xs", "md")}} > {title} </Typography>
        <Typography variant="h1"sx={{fontSize: useResponsiveSizes(11, 2, "xs", "md"), px: 1.5}} style={color && {color: color}} > {value} </Typography>
    </Box>
); 