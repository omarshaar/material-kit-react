import { Box, Card, useTheme } from "@mui/material";
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { forwardRef, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import Typography from '@mui/material/Typography';
import { extractDate, extractTime } from "src/utils/format-created-dateTime";

const RasidCard = (props) => {
    const theme = useTheme();
    const { data, sx, callBack, details } = props;
    const [ providers, setProviders ] = useState({
        MTN: {
          name: "MTN",
          color: "#FFCB00", 
          font: "#000",
        },
        SYR:{
          name: "SYR",
          color: "#CC0100",
          font: "#fff",
        }
    });

    return (
        <Card
          onClick={callBack}
          component={Stack}
          sx={{ direction: theme.direction.main, p: useResponsiveSizes(1, 1, "xs", "md"), borderRadius: 2, boxShadow: theme.shadows[2], cursor: "pointer", ...sx,  }}
        >
            <Box sx={{flex: 1, display: "flex" , justifyContent: "space-between", alignItems: "center"}} component={"div"}>
                <Box sx={{flex: 1}} >
                    <Row title="رقم الطلبية:" value={data.hubID} />
                    <Row title="المبلغ:" value={data.total_payment_amount} />
                    { details &&  <div style={{height: 1, width: "100%", backgroundColor: "#ddd", marginTop: 10, marginBottom: 10}}></div>}
                    { details && <Row title="التاريخ:" value={extractDate(data.created_at)} />}
                    { details && <Row title="الوقت:" value={extractTime(data.created_at)} />}
                    { details && <Row title="تحقق الدفع:" value={data.paid ? "مدفوعة" : "غير مدفوعة" } />}
                    { details && <Row title="المعرف الخاص:" value={data.id} />}
                    { details && data.taklifa > 0 && <Row title="التكلفة:" value={data.taklifa} />}
                    <div style={{height: 1, width: "100%", backgroundColor: "#ddd", marginTop: 10, marginBottom: 10}}></div>
                    <Row title="الرقم:" value={data.receiver_number} color={theme.palette.error.dark} />
                    <Row title="الرصيد:" value={data.total_rasid} color={theme.palette.error.dark} />
                    <Row title="نوع الخط:" value={data.sim_type == "vatora" ? "فاتورة" : "وحدات" } color={theme.palette.error.dark} />
                </Box>

                <Box sx={{
                    display: "flex", flexDirection: "column", justifyContent: "center" , alignItems:"center",
                    mr: 2,
                    width: useResponsiveSizes(35, 8, "xs", "lg"), 
                    height: useResponsiveSizes(35, 8, "xs", "lg"),
                    backgroundColor: providers[data.sim_provider].color,
                    borderRadius: {xs: 0.5, md: 1}
                }}>
                   <Typography variant="h6" sx={{fontSize: useResponsiveSizes(10, 2, "xs", "lg"), color: providers[data.sim_provider].font }}>{data.sim_provider}</Typography>
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



export default RasidCard;

RasidCard.propTypes = {
    data: PropTypes.object,
    sx: PropTypes.object,
};