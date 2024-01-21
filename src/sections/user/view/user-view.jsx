import { useEffect, useMemo, useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { users } from 'src/_mock/user';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import { getUsers } from 'src/services/users';
import { fShortenNumber } from 'src/utils/format-number';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function UserPage() {
  const navigate = useNavigate();

  const [ data, setData ] = useState([]);
  const [ lastPage, setLastPage ] = useState(0);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const [usersCount, setCount] = useState(0);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, row) => {
    // const selectedIndex = selected.indexOf(name);
    navigate("/user/"+row.user_id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const getUserData = () => {
    getUsers(rowsPerPage ,page).then(res=> {
      if (res.success == "true") {
        setCount(res.count);
        setLastPage(res.last_page);
        setData(res.data);
      }
    });
  }

  function getRandomNumber() {
    // توليد رقم عشوائي بين 0 و 1
    var randomNumber = Math.random();
    // تحويله إلى رقم بين 1 و 25
    var result = Math.floor(randomNumber * 25) + 1;

    return result;
  }


  useEffect(()=>{
    getUserData();
  },[page, rowsPerPage]);

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4"> { fShortenNumber(usersCount) } Users</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New User
        </Button>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 700 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'email', label: 'Email' },
                  { id: 'country', label: 'Country' },
                  { id: 'city', label: 'City', align: 'center' },
                  { id: 'status', label: 'Status' },
                  { id: '' },
                ]}
              />
              {
                useMemo(()=> 
                  <TableBody>
                    {[...data]
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => (
                        <UserTableRow
                          key={row.id}
                          name={row.name}
                          user_country={row.user_country}
                          status={row.is_account_deleted ? "banned" : "active"}
                          email={row.email}
                          avatarUrl={`/assets/images/avatars/avatar_${getRandomNumber()}.jpg`}
                          user_city={row.user_city}
                          // selected={selected.indexOf(row.name) !== -1}
                          handleClick={(event) => handleClick(event, row)}
                        />
                      ))}

                    <TableEmptyRows
                      height={77}
                      emptyRows={emptyRows(page, rowsPerPage, users.length)}
                    />

                    {notFound && <TableNoData query={filterName} />}
                  </TableBody>
                ,[data])
              }
            </Table>
          </TableContainer>
        </Scrollbar>
        <TablePagination
          page={page}
          component="div"
          count={lastPage}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[10, 20, 30]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
