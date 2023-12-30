import { Box, Typography } from "@mui/material";
// Hooks
import { useTheme } from '@mui/material/styles';
import { forwardRef } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import SectionCard from "src/myComponents/order-page-components/SectionCard";


const OrderDetails = (props) => {
    const theme = useTheme();
    const { sx } = props;
 

    return (
        <SectionCard sx={{py: 3}}>
            <Row title="الاسم:" value="omar shaar" />
            <Row title="رقم الطلبية:" value="1056" />
            <Row title="المبلغ:" value="10" />
            <div style={{height: 1, width: "100%", backgroundColor: "#ddd", marginTop: 10, marginBottom: 10}}></div>
            <Row title="عدد المستندات:" value="2" color={theme.palette.error.dark} />
            <Row title="نوع المستند:" value="شهادات ميلاد/ شهادات وفاة" color={theme.palette.error.dark} />
        </SectionCard>
    );
}

export default OrderDetails;


const Row = forwardRef(({title, value, icon, color}, ref)=>
    <Box component={"div"} sx={{display: "flex", alignItems: "center", mb: 0.5}} ref={ref}>
        <Typography variant="subtitle1" sx={{fontSize: useResponsiveSizes(10, 2, "xs", "md")}} > {title} </Typography>
        <Typography variant="h1"sx={{fontSize: useResponsiveSizes(11, 2, "xs", "md"), px: 1.5}} style={color && {color: color}} > {value} </Typography>
    </Box>
); 