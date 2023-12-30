import { Box, Typography } from "@mui/material";
// Hooks
import { useTheme } from '@mui/material/styles';
import { forwardRef, useEffect, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import SectionCard from "src/myComponents/order-page-components/SectionCard";
import { MyButton, MyInput } from "src/myComponents";


const Payment = () => {
    const [ taklifa, setTaklifa ] = useState();


    return (
        <SectionCard title="الدفع" spacing={useResponsiveSizes(1,1, undefined, "sm")} >
            <MyInput placeholder={"تغيير القيمة المدفوعة"}  value={taklifa} onChange={(value)=> setTaklifa(value)} />
            <MyButton title="تم الدفع" onClick={()=> console.log("payment")} />
        </SectionCard>
    );
}

export default Payment;