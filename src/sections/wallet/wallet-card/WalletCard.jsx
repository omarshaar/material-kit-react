import { Box, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fShortenNumber } from "src/utils/format-number";
import { handleLogin } from "src/utils/handle-login";

const WalletCard = (props) => {
    const { data } = props;
    const [ name, setName ] = useState("");
    
    useEffect(()=>{
        handleLogin((value)=> setName(JSON.parse(value).data.name));
    },[]);


    return (
        <Card
            sx={{
                flex: 1,
                height: {xs: 150, sm: 200},
                background: "linear-gradient(40deg, rgba(123,45,214,1) 0%, rgba(53,173,203,1) 100%)",
                p: 3,
                direction: "ltr",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                borderRadius: 1
            }}
        >
            <Box component={"div"}>
                <Typography variant="h6" sx={{color: "#fff"}}> {name} </Typography>
                <Typography variant="h1" sx={{color: "#fff"}}> { fShortenNumber(data.total) } € </Typography>
                <Typography variant="body2" sx={{color: "#fff"}}> 100€ هذا الشهر </Typography>
            </Box>
        </Card>
    );
}

export default WalletCard;