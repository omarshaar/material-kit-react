import { Box, MenuItem, TextField, Typography } from "@mui/material";
// Hooks
import { useTheme } from '@mui/material/styles';
import { forwardRef, useEffect, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import SectionCard from "src/myComponents/order-page-components/SectionCard";
import { MyButton, MyInput } from "src/myComponents";


const EditOrder = () => {
    const [ taklifa, setTaklifa ] = useState();
    const [ editOn, setEditOn ] = useState(0);
    const theme = useTheme();


    return (
        <SectionCard title="التعديل على الطلب" spacing={useResponsiveSizes(1,1, undefined, "sm")} >
            <Box component={"div"} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                <Typography variant="h6" sx={{fontSize: useResponsiveSizes(10, 2, "xs", "md")}} >التعديل على</Typography>
                
                <TextField select size="medium" value={editOn} sx={{flex: 1, mr: {xs: 1, md: 5, lg: 10}}} onChange={(e)=> setEditOn(e.target.value)}>
                    <MenuItem value={0} sx={{direction: theme.direction.main}}> اختر </MenuItem>
                    <MenuItem value={1} sx={{direction: theme.direction.main}}> 1 </MenuItem>
                </TextField>

            </Box>
            <MyInput placeholder={"ادخل القيمة الجديدة"}  value={taklifa} onChange={(value)=> setTaklifa(value)} />
            <MyButton title="حفظ التغيرات" onClick={()=> console.log("payment")} />
        </SectionCard>
    );
}

export default EditOrder;
