import { Box, Card, useTheme } from "@mui/material";
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { forwardRef, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';


const AuthsCard = (props) => {
    const theme = useTheme();
    const { data, sx } = props;


    return (
        <Card
          spacing={1}
          component={Stack}
          sx={{ direction: theme.direction.main, p: useResponsiveSizes(1, 1, "xs", "md"), borderRadius: 2, boxShadow: theme.shadows[2], ...sx,  }}
        >
            <Box sx={{flex: 1, display: "flex" , justifyContent: "space-between", alignItems: "center"}} component={"div"}>
                <Box sx={{flex: 1}} >
                    <Row title="الاسم:" value="omar shaar" />
                    <Row title="رقم الطلبية:" value="1056" />
                    <Row title="المبلغ:" value="10" />
                    <div style={{height: 1, width: "100%", backgroundColor: "#ddd", marginTop: 10, marginBottom: 10}}></div>
                    <Row title="عدد المستندات:" value="2" color={theme.palette.error.dark} />
                    <Row title="نوع المستند:" value="شهادات ميلاد/ شهادات وفاة" color={theme.palette.error.dark} />
                </Box>

                <Box sx={{
                    display: "flex", flexDirection: "column", justifyContent: "center" , alignItems:"center",
                    mr: 2,
                    width: useResponsiveSizes(35, 8, "xs", "lg"),
                    height: useResponsiveSizes(35, 8, "xs", "lg"),
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: {xs: 0.5, md: 1}
                }}>
                   <Iconify icon="heroicons:document-check-solid" sx={{ color: '#fff', width: {xs: 20, md: 30}, height: {xs: 20, md: 30} }} />
                </Box>
            </Box>
        </Card>
    );
}



const Row = forwardRef(({title, value, icon, color}, ref)=>
    <Box component={"div"} sx={{display: "flex", alignItems: "center", mb: 0.5}} ref={ref}>
        <Typography variant="subtitle1" sx={{fontSize: useResponsiveSizes(10, 2, "xs", "md")}} > {title} </Typography>
        <Typography variant="h1"sx={{fontSize: useResponsiveSizes(10, 2, "xs", "md"), px: 1.5}} style={color && {color: color}} > {value} </Typography>
    </Box>
); 



export default AuthsCard;

AuthsCard.propTypes = {
    data: PropTypes.object,
    sx: PropTypes.object,
};