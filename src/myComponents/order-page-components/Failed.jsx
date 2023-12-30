import { Box, Typography } from "@mui/material";
// Hooks
import { useTheme } from '@mui/material/styles';
import { forwardRef, useEffect, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import SectionCard from "src/myComponents/order-page-components/SectionCard";
import { MyButton, MyInput } from "src/myComponents";


const Failed = () => {
    const [ taklifa, setTaklifa ] = useState();

    return (
        <SectionCard title="فشل الطلبية" spacing={useResponsiveSizes(1,1, undefined, "sm")} >
            <MyInput placeholder={"ادخل السبب"}  value={taklifa} onChange={(value)=> setTaklifa(value)} />
            <MyButton title="فشل اكمال الطلب" onClick={()=> console.log("payment")} sx={{backgroundColor: "error.darker"}} />
        </SectionCard>
    );
}

export default Failed;