import { Box, Typography } from "@mui/material";
// Hooks
import { useTheme } from '@mui/material/styles';
import { forwardRef, useEffect, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import SectionCard from "src/myComponents/order-page-components/SectionCard";
import { MyButton, MyInput } from "src/myComponents";
import { editOrder, failedOrder } from "src/services/orders";
import { useNavigate } from "react-router-dom";


const Failed = (props) => {
    const { data } = props;
    const { id, type, hubID } = data;
    const navigate = useNavigate();
    const [ value, setValue ] = useState("");
    const [ notiMsg, setNotimsg ] = useState("");
    const [ notiTitle, setNotiTitle ] = useState("");

    function handleIsFailed() {
        const query = {failed: 1, complated: 0};
        if (value) query["status"] = value;
        
        const sure = window.confirm("هل انت متأكد؟");
        if(!sure) return;
        
        failedOrder(id, type, hubID, value, notiMsg, notiTitle).then(res=> {
            if (res) {
                setValue("");
                setNotimsg("");
                setNotiTitle("");
                navigate('/order/'+hubID, { state: {reload: true} });
            }
        });
    }

    return (
        <SectionCard title="فشل الطلبية" spacing={useResponsiveSizes(1,1, undefined, "sm")} >
            <MyInput placeholder={"ادخل السبب"}  value={value} onChange={(value)=> setValue(value)} />
            <MyInput placeholder={"عنوان الاشعار"}  value={notiTitle} onChange={(value)=> setNotiTitle(value)} />
            <MyInput placeholder={"رسالة الاشعار"}  value={notiMsg} onChange={(value)=> setNotimsg(value)} multiline />
            <MyButton title="فشل اكمال الطلب" onClick={handleIsFailed} sx={{backgroundColor: "error.darker"}} />
        </SectionCard>
    );
}

export default Failed;