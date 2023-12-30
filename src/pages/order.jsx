import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { OrderView } from 'src/sections/order/view';

// ----------------------------------------------------------------------

export default function Orders() {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <title> order </title>
      </Helmet>
      <OrderView />
    </>
  );
}
