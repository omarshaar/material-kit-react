import { Helmet } from 'react-helmet-async';
import { UserDataView } from 'src/sections/user-data/view';

// ----------------------------------------------------------------------

export default function Orders() {

  return (
    <>
      <Helmet>
        <title> User </title>
      </Helmet>

      <UserDataView />
    </>
  );
}
