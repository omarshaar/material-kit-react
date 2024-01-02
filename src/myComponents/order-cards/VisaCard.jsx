import { Box, Card, useTheme } from "@mui/material";
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { forwardRef, useState } from "react";
import { useResponsiveSizes } from "src/hooks/use-responsive-sizes";
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';
import { extractDate, extractTime } from "src/utils/format-created-dateTime";


const VisaCard = (props) => {
    const theme = useTheme();
    const { data, sx, callBack, details } = props;
    const [ visa_categorys, setVisaCategorys ] = useState({
        "a" : "لم شمل العائلة و الزوجة",
        "b" : "لم شمل العائلة من الدرجة الثانية",
        "c" : "فيزا دراسة/عمل/كورس لغة",
        "d" : "اعادة توطين للحاصلين على الاقامة",
        "e" : "فيزا للزيارة او السياحة",
    });
    console.log(data);


    return (
        <Card
          spacing={1}
          onClick={callBack}
          component={Stack}
          sx={{ direction: theme.direction.main, p: useResponsiveSizes(1, 1, "xs", "md"), borderRadius: 2, boxShadow: theme.shadows[2], cursor: "pointer", ...sx,  }}
        >
            <Box sx={{flex: 1, display: "flex" , justifyContent: "space-between", alignItems: "center"}} component={"div"}>
                <Box sx={{flex: 1}} >
                    <Row title="الاسم:" value="omar shaar" />
                    <Row title="رقم الطلبية:" value="1056" />
                    <Row title="المبلغ:" value={data.total_payment_amount} />
                    { details &&  <div style={{height: 1, width: "100%", backgroundColor: "#ddd", marginTop: 10, marginBottom: 10}}></div>}
                    { details && <Row title="التاريخ:" value={extractDate(data.created_at)} />}
                    { details && <Row title="الوقت:" value={extractTime(data.created_at)} />}
                    { details && <Row title="تحقق الدفع:" value={data.paid ? "مدفوعة" : "غير مدفوعة" } />}
                    { details && <Row title="المعرف الخاص:" value={data.id} />}
                    { details && data.capital && <Row title="التكلفة:" value={data.capital} />}
                    <div style={{height: 1, width: "100%", backgroundColor: "#ddd", marginTop: 10, marginBottom: 10}}></div>
                    <Row title="نوع الفيزا:" value={visa_categorys[data.category] } color={theme.palette.error.dark} />

                    { details && data.birth_date && <Row title="تاريخ الميلاد:" value={ data.birth_date } color={theme.palette.error.dark}/>}
                    { details && data.telefon && <Row title="رقم الهاتف:" value={ data.telefon } color={theme.palette.error.dark}/>}
                    { details && data.germany_family_member_nationality && <Row title="جنسية فرد الأسرة:" value={ data.germany_family_member_nationality }  color={theme.palette.error.dark}/>}
                    { details && data.germany_family_member_relationship && <Row title="علاقتك بأحد أفراد العائلة:" value={ data.germany_family_member_relationship } color={theme.palette.error.dark} />}
                    { details && data.germany_reference_person_name && <Row title="اسم الشخص المرجعي:" value={ data.germany_reference_person_name } color={theme.palette.error.dark} />}
                    { details && data.name_of_family_member_germany && <Row title="اسم فرد العائلة:" value={ data.name_of_family_member_germany } color={theme.palette.error.dark} />}
                    { details && data.pass_number && <Row title="رقم جواز السفر:" value={ data.pass_number } color={theme.palette.error.dark} />}
                    { details && data.proof_document && <Row title="وثيقة الإثبات:" value={ data.proof_document } color={theme.palette.error.dark} />}
                    { details && data.residence_premit_serial_number && <Row title="رقم الاقامة:" value={ data.residence_premit_serial_number } color={theme.palette.error.dark}  />}
                    { details && data.syria_closest_family_member && <Row title="أقرب أفراد العائلة:" value={ data.syria_closest_family_member } color={theme.palette.error.dark} />}
                    { details && data.travel_main_purpose && <Row title="الغرض من السفر:" value={ data.travel_main_purpose } color={theme.palette.error.dark} />}
                    { details && data.travel_mainp_urpose && <Row title="سبب السفر:" value={ data.travel_mainp_urpose } color={theme.palette.error.dark} />}
                    { details && data.visum_purpose && <Row title="الغرض من التقديم:" value={ data.visum_purpose } color={theme.palette.error.dark} />}
                    { details && data.haveGermanCertificate && <Row title=" لديك شهادة B1 او اعلى:" value={ data.haveGermanCertificate ? "نعم" : "لا" } color={theme.palette.error.dark} /> }
                    { details && data.haveApprovalFromBundesagentur && <Row title="موافقة مسبقة من وكالة التوظيف؟" value={ data.haveApprovalFromBundesagentur ? "نعم" : "لا" } color={theme.palette.error.dark} /> }
                    { details && data.haveapprovalFromTheImmigrationAuthority && <Row title="موافقة مسبقة من مكتب الجانب:" value={ data.haveapprovalFromTheImmigrationAuthority ? "نعم" : "لا" } color={theme.palette.error.dark} /> }
                    { details && <Row title="اعيش في سوريا:" value={ data.is_live_in_syria ? "نعم" : "لا" } color={theme.palette.error.dark} />}
                    { details && <Row title="فلسطيني الاصل:" value={ data.is_palestinian ? "نعم" : "لا" } color={theme.palette.error.dark} />}
                    { details && data.is_previous_visas_last_five_years && <Row title="تأشيرات سابقة خلال السنوات الخمس الماضية؟:" value={data.is_previous_visas_last_five_years ? "نعم" : "لا" } color={theme.palette.error.dark} /> }

                    {/* 
                     */}
                </Box>

                <Box sx={{
                    display: "flex", flexDirection: "column", justifyContent: "center" , alignItems:"center",
                    mr: 2,
                    width: useResponsiveSizes(35, 8, "xs", "lg"),
                    height: useResponsiveSizes(35, 8, "xs", "lg"),
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: {xs: 0.5, md: 1}
                }}>
                   <Iconify icon="material-symbols:flight-takeoff" sx={{ color: '#fff', width: {xs: 20, md: 30}, height: {xs: 20, md: 30} }}  />
                </Box>
            </Box>
        </Card>
    );
}



const Row = forwardRef(({title, value, icon, color}, ref)=>
    <Box component={"div"} sx={{display: "flex", alignItems: "center", mb: 0.5}} ref={ref}>
        <Typography variant="subtitle1" sx={{fontSize: useResponsiveSizes(10, 2, "xs", "md")}} > {title} </Typography>
        <Typography variant="h1"sx={{fontSize: useResponsiveSizes(10, 2, "xs", "md"), px: 1.5}} style={color && {color: color}} > {value} </Typography>
    </Box>
); 



export default VisaCard;

VisaCard.propTypes = {
    data: PropTypes.object,
    sx: PropTypes.object,
};