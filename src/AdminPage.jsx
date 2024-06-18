import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import EnhancedTableHead from './components/AdminHeader.jsx';

const getCars = async () => {
  const { data } = await axios.get('http://localhost:3000/cars');
  return data;
}

let rows = await getCars();

const changeAvailability = async (id) => {
  const result = await axios.patch(`http://localhost:3000/availability/${id}`)
    .catch(error => console.error(error));
  return result
}

const handleAvailableClick = (e) => {
  if (e.target.innerHTML === 'Available') {
    e.target.innerHTML = 'Unavailable'
  } else {
    e.target.innerHTML = 'Available'
  }
  changeAvailability(e.target.id)
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function AdminPage() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Price');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async (id) => {
    const result = await axios.delete(`http://localhost:3000/cars`,
      {
        data:
          { "id": id }
      }
    )
      .then(response => {
        setRows(rows.filter((car) => car.id !== id))
        navigate('/inventory', { state: { message: 'Car deleted successfully!' } });
      })
      .catch(error => console.error(error));
    return result
  }

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, rows],
  );

  const navigate = useNavigate();

  React.useEffect(() => {
    getCars().then((data) => {
      setRows(data.reverse());
    });
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Typography variant="h3" component="h3" sx={{ width: '80%', mb: '6', mt: 5, ml: 'auto', mr: 'auto' }}>
        Admin Console:
      </Typography>
      <Box sx={{ width: '100%', m: 'auto' }} style={{ flexGrow: 1 }}>
        <Paper sx={{ width: '80%', mt: 5, m: 'auto' }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size='medium'
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell>{row.make}</TableCell>
                      <TableCell>{row.model}</TableCell>
                      <TableCell>{row.year}</TableCell>
                      <TableCell>{row.mileage.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                      <TableCell>${row.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                      <TableCell>{row.color}</TableCell>
                      <TableCell>{row.fuel_type}</TableCell>
                      <TableCell id={row.id} onClick={(e) => handleAvailableClick(e)}>{row.availability ? 'Available' : 'Not Available'}</TableCell>
                      <TableCell id={row.id} onClick={() => handleDelete(row.id)} sx={{ textAlign: "center" }}><DeleteIcon /></TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
      <Footer />
    </div>
  );
}