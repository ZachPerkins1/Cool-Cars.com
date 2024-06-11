import { useState, useEffect } from 'react'; 
import axios from 'axios';
import NavBar from './components/NavBar.jsx';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AdminPage() {
    const [cars, setCars] = useState([]);
    const [models, setModels] = useState({});
    const [colors, setColors] = useState({});
    const headers = ['Make', 'Model', 'Year', 'Mileage', 'Price', 'Color', 'Fuel', 'Available'];

    const headerTitles = headers.map((header) =>
        <TableCell key={header}>
                {header}
        </TableCell>
    );

    const unpackData = (dataArr) => {
        let dataObj = {};
        for (let property in dataArr) {
            dataObj[Number(property) + 1] = dataArr[property].name
        }
        return dataObj;
    }

    const getCars = async () => {
        const { data } = await axios.get('http://localhost:3000/cars');
        return data;
    }

      useEffect(() => {
        getCars().then((data) => {
            setCars(data)
            console.log(cars)
        })
    }, [])

    return (
        <>
            <NavBar />
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headerTitles}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cars.map((car) => (
                        <TableRow
                            key={car.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {car.make}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {car.model}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {car.name.slice(-4)}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {car.mileage.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                ${car.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {car.color}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {car.fuel_type}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {car.availability ? 'Available' : 'Not Available'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}

export default AdminPage;