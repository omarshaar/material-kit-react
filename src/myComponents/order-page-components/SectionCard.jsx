import { Card, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";

const SectionCard = ({children, sx, title, spacing}) => {
    const theme = useTheme();

    return (
        <Card 
          spacing={spacing ? spacing : 1}
          component={Stack}
          sx={{ direction: theme.direction.main, p: useResponsiveSizes(1, 1, "xs", "md"), borderRadius: {xs: 1, md: 2}, boxShadow: theme.shadows[2], ...sx  }}
        >  
            { title && <Typography variant="h6" sx={{fontSize: useResponsiveSizes(13, 2, "xs", "md")}} >{title}</Typography> }
            { children }
        </Card>
    );
}

export default SectionCard;