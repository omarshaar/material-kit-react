import { TextField } from "@mui/material";
import { forwardRef } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import PropTypes from 'prop-types';


const MyInput = forwardRef(({placeholder, value, onChange, multiline}, ref)=>
    <TextField 
        ref={ref} 
        InputProps={{sx: {
            backgroundColor: "#f3f3ff",
            fontSize: useResponsiveSizes(12, 2, "xs", "md")
        }}}
        placeholder={placeholder} 
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        multiline={multiline}
    />
)


export default MyInput;

MyInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func
}