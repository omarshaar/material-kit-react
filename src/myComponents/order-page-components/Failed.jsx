import { Box, Typography } from "@mui/material";
// Hooks
import { useTheme } from '@mui/material/styles';
import { forwardRef, useEffect, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import SectionCard from "src/myComponents/order-page-components/SectionCard";
import { MyButton, MyInput } from "src/myComponents";
import { editOrder } from "src/services/orders";
import { useNavigate } from "react-router-dom";


const Failed = (props) => {
    const [ value, setValue ] = useState("");
    const navigate = useNavigate();
    const { data } = props;
    const { id, type, hubID } = data;

    function handleIsFailed() {
        const query = {failed: 1, complated: 0};
        if (value) query["status"] = value;

        editOrder(id, type, JSON.stringify(query)).then((res) => {
            console.log(res);
            if (res) {
                setValue("");
                navigate('/order/'+hubID, { state: {reload: true} });
            }
        });
    }

    return (
        <SectionCard title="فشل الطلبية" spacing={useResponsiveSizes(1,1, undefined, "sm")} >
            <MyInput placeholder={"ادخل السبب"}  value={value} onChange={(value)=> setValue(value)} />
            <MyButton title="فشل اكمال الطلب" onClick={handleIsFailed} sx={{backgroundColor: "error.darker"}} />
        </SectionCard>
    );
}

export default Failed;