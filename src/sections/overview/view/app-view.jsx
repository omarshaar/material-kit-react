import { useEffect, useState } from 'react';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
// Components
// import AppWidgetSummary from '../app-widget-summary';
import { AppWidgetSummary } from 'src/myComponents';
// My Hooks
import { useResponsiveSizes } from 'src/hooks/use-responsive-sizes';
import Icons from 'src/assets/Icons';
import AppInprogressOrders from 'src/sections/overview/app-inprogress-orders';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function AppView() {
  const theme = useTheme();
  const [ summarys, setSummarys ] = useState({
    totalUsers: null,
    newUsers: null,
    salesToday: null,
    products: null,
  });


  return (
    <Container maxWidth="xl">
      {/* <Typography variant="h4" sx={{ mb: useResponsiveSizes(1, 1, undefined, "md") }} style={{direction: theme.direction.main, color: theme.palette.action.active }}> مرحبا بك مجددا 👋 </Typography> */}

      <Typography variant="subtitle1" sx={{p: 1}} style={{direction: theme.direction.main, color: theme.palette.action.active }}> نظرة عامة </Typography>

      <Grid container spacing={useResponsiveSizes(0, 1.5, "xs", "sm")} sx={{ mb: useResponsiveSizes(1, 1, undefined, "md") }}>
        <Grid xs={6} sm={4} md={3}>
          <AppWidgetSummary
            title="جميع الطلبات"
            total={8000}
            color="success"
            icon={<Iconify icon="ic:sharp-store" sx={{ color: 'primary.main', width: {xs: 25, md: 35}, height: {xs: 25, md: 35} }} />}
          />
        </Grid>

        <Grid xs={6} sm={4} md={3}>
          <AppWidgetSummary
            title="جميع المدفوعات"
            total={800000}
            color="success"
            icon={<Iconify icon="streamline:payment-10-solid" sx={{ color: 'primary.main', width: {xs: 20, md: 34}, height: {xs: 20, md: 34} }} />}
          />
        </Grid>

        <Grid xs={6} sm={4} md={3}>
          <AppWidgetSummary
            title="طلبات اليوم"
            total={800000}
            color="success"
            icon={<Iconify icon="streamline:calendar-jump-to-date-solid" sx={{ color: 'primary.main', width: {xs: 20, md: 30}, height: {xs: 20, md: 30} }} />}
          />
        </Grid>

        <Grid xs={6} sm={4} md={3}>
          <AppWidgetSummary
            title="قيد التنفيذ"
            total={800000}
            color="success"
            icon={<Iconify icon="material-symbols:deployed-code-update-sharp" sx={{ color: 'primary.main', width: {xs: 25, md: 35}, height: {xs: 25, md: 35} }} />}
          />
        </Grid>
      </Grid>

      <Typography variant='subtitle1' sx={{p: 1}} style={{direction: theme.direction.main, color: theme.palette.action.active }} > قيد التنفيذ </Typography>
      <AppInprogressOrders />
      
    </Container>
  );
}







/*
<Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Website Visits"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid>

*/