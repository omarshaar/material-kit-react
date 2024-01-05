import { Box, Typography } from "@mui/material";
// Hooks
import { useTheme } from '@mui/material/styles';
import { forwardRef, useEffect, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import SectionCard from "src/myComponents/order-page-components/SectionCard";
import { MyButton, MyInput } from "src/myComponents";
import { editOrder } from "src/services/orders";
import { useNavigate } from "react-router-dom";


const Payment = (props) => {
    const navigate = useNavigate();
    const [ value, setValue ] = useState("");
    const { data } = props;
    const { id, type, hubID } = data;

    function handleIsPayment() {
        const query = {paid: 1};
        if (value) query["total_payment_amount"] = value;
        if (value) query["status"] = "الطلب قيد التنفيذ";

        const sure = window.confirm("هل انت متأكد؟");
        if(!sure) return;
        
        editOrder(id, type, JSON.stringify(query)).then((res) => {
            if (res) {
                setValue("");
                navigate('/order/'+hubID, { state: {reload: true} });
            }
        });
    }

    return (
        <SectionCard title="الدفع" spacing={useResponsiveSizes(1,1, undefined, "sm")} >
            <MyInput placeholder={"تغيير القيمة المدفوعة"} value={value} onChange={(value)=> setValue(value)} />
            <MyButton title="تم الدفع" onClick={handleIsPayment} />
        </SectionCard>
    );
}

export default Payment;