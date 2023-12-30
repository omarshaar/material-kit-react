import { Box, Card, Typography, useTheme } from "@mui/material";
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import { fShortenNumber } from 'src/utils/format-number';


export default function AppWidgetSummary(props) {
    const theme = useTheme();
    const { title, sx, icon, total } = props;
    const padding = useResponsiveSizes(1, 1, "xs", "md");


    return (
        <Card
            spacing={1}
            component={Stack}
            sx={{ direction: theme.direction.main, p: padding, borderRadius: 2, boxShadow: theme.shadows[1]  , ...sx,  }}
        >
            {icon && <Box sx={{ width: {xs: 25 , sm: 30, md: 45}, height: {xs: 25 , sm: 30, md: 45} }}>{icon}</Box>}
            <Typography variant="h5" sx={{fontSize: useResponsiveSizes(10, 3, "xs", "md")}} > {title} </Typography>
            <Typography variant="h5" sx={{fontSize: useResponsiveSizes(13, 2, "xs", "md"), color: "secondary.main"}} > { fShortenNumber(total) } </Typography>
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