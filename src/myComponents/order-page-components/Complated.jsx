import { Box, Typography } from "@mui/material";
// Hooks
import { useTheme } from '@mui/material/styles';
import { forwardRef, useEffect, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import SectionCard from "src/myComponents/order-page-components/SectionCard";
import { MyButton, MyInput } from "src/myComponents";


const Complated = () => {
    const [ taklifa, setTaklifa ] = useState();


    return (
        <SectionCard title="اكتملت" spacing={useResponsiveSizes(1,1, undefined, "sm")} >
            <MyInput placeholder={"التكلفة"}  value={taklifa} onChange={(value)=> setTaklifa(value)} />
            <MyButton title="تم اكتمال الطلب" onClick={()=> console.log("payment")} sx={{backgroundColor: "success.dark"}}  />
        </SectionCard>
    );
}

export default Complated;