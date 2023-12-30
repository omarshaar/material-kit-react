import { Button } from "@mui/material";
import { forwardRef } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import PropTypes from 'prop-types';


const MyButton = forwardRef(({title, onClick, sx}, ref)=>
    <Button onClick={onClick} ref={ref} variant="contained" color="inherit" sx={{backgroundColor: "primary.main", py: 2, fontSize: useResponsiveSizes(10, 2, "xs", "sm"), ...sx}}>{title}</Button>
)

export default MyButton;


MyButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    sx: PropTypes.object
}