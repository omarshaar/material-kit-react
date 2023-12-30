import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'الرئيسية',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'الطلبات',
    path: '/orders',
    icon: icon('ic_cart'),
  },
  {
    title: 'المستخدمين',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'المحفظة',
    path: '/wallet',
    icon: icon('ic_blog'),
  }
  ,
  {
    title: 'التقارير',
    path: '/analays',
    icon: icon('ic_blog'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // }
];

export default navConfig;
