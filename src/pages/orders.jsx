import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { OrdersView } from 'src/sections/orders/view';

// ----------------------------------------------------------------------

export default function Orders() {
  const { id } = useParams();


  return (
    <>
      <Helmet>
        <title> Orders </title>
      </Helmet>

      <OrdersView />
    </>
  );
}
