import { Box, Typography } from "@mui/material";
// Hooks
import { useTheme } from '@mui/material/styles';
import { forwardRef, useEffect, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import SectionCard from "src/myComponents/order-page-components/SectionCard";
import { MyButton, MyInput } from "src/myComponents";
import { complatedOrder } from "src/services/orders";
import { useNavigate } from "react-router-dom";


const Complated = (props) => {
    const navigate = useNavigate();
    const [ taklifa, setTaklifa ] = useState("");
    const { data } = props;
    const { id, type, hubID } = data;


    const handleOrderComplated = () => {
        if (!taklifa || isNaN(parseInt(taklifa))) { window.alert("الرجاء ادخال قيمة التكلفة"); return};
        const sure = window.confirm("هل انت متأكد؟");
        if(!sure) return;
        complatedOrder(id, type, taklifa, hubID).then((res)=>{
            if (res.success) navigate('/order/'+hubID, { state: {reload: true} });
        });
    }

    return (
        <SectionCard title="اكتملت" spacing={useResponsiveSizes(1,1, undefined, "sm")} >
            <MyInput placeholder={"التكلفة"}  value={taklifa} onChange={(value)=> setTaklifa(value)} />
            <MyButton title="تم اكتمال الطلب" onClick={handleOrderComplated} sx={{backgroundColor: "success.dark"}}  />
        </SectionCard>
    );
}

export default Complated;