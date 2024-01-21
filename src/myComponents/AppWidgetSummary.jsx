import { Box, Card, Typography, useTheme } from "@mui/material";
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import { fShortenNumber } from 'src/utils/format-number';
import { handleLogin } from "src/utils/handle-login";


export default function AppWidgetSummary(props) {
    const theme = useTheme();
    const { title, sx, icon, total } = props;
    const padding = useResponsiveSizes(1, 1, "xs", "md");
    const [isPapa, setIsPapa] = useState(false);


    useEffect(()=> {
        handleFontSize();
    },[]);

    async function handleFontSize() {
        const partnerData = await handleLogin();
        partnerData.data.id == 3 && setIsPapa(true);
    }

    return (
        <Card
            spacing={1}
            component={Stack}
            sx={{ direction: theme.direction.main, p: padding, borderRadius: 2, boxShadow: theme.shadows[1]  , ...sx,  }}
        >
            {icon && <Box sx={{ width: {xs: 25 , sm: 30, md: 45}, height: {xs: 25 , sm: 30, md: 45} }}>{icon}</Box>}
            <Typography variant="h5" sx={isPapa ? {fontSize: useResponsiveSizes(20, 3, "xs", "md")}  : {fontSize: useResponsiveSizes(11, 3, "xs", "md")}} > {title} </Typography>
            <Typography variant="h5" sx={isPapa ? {fontSize: useResponsiveSizes(23, 2, "xs", "md"), color: "secondary.main"} : {fontSize: useResponsiveSizes(14, 2, "xs", "md"), color: "secondary.main"}} > { total > 0 ? fShortenNumber(total) : 0 } </Typography>
        </Card>
    );
}


AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};