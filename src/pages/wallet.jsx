import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { WalletView } from 'src/sections/wallet/view';

// ----------------------------------------------------------------------

export default function Orders() {

  return (
    <>
      <Helmet>
        <title> Wallet </title>
      </Helmet>

      <WalletView />
    </>
  );
}
