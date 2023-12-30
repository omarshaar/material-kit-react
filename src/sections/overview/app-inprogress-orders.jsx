import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import OrdersSection from "../orders/orders-section/orders-section";

const AppInprogressOrders = () => {
    const theme = useTheme();
    return (
        <Box sx={{direction: theme.direction.main}}>
            <OrdersSection />
        </Box>
    );
}

export default AppInprogressOrders;