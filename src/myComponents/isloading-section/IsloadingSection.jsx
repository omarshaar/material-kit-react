import { Box } from "@mui/material";
import Iconify from "src/components/iconify";

const IsloadingSection = (props) => {
    const { sx } = props;
    return(
        <Box sx={{flex: 1, height: "70vh", display: "flex", justifyContent: "center", alignItems: "center", ...sx}} >
            <Iconify icon="eos-icons:bubble-loading" sx={{ color: '#000', width: {xs: 35, md: 45}, height: {xs: 35, md: 45} }} />
        </Box>
    )
}

export default IsloadingSection;

