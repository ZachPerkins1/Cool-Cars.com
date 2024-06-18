import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';

const headCells = [
    {
        id: 'make',
        numeric: false,
        disablePadding: false,
        label: 'Make',
    },
    {
        id: 'model',
        numeric: false,
        disablePadding: false,
        label: 'Model',
    },
    {
        id: 'year',
        numeric: true,
        disablePadding: false,
        label: 'Year',
    },
    {
        id: 'mileage',
        numeric: true,
        disablePadding: false,
        label: 'Mileage',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'color',
        numeric: false,
        disablePadding: false,
        label: 'Color',
    },
    {
        id: 'fuel_type',
        numeric: false,
        disablePadding: false,
        label: 'Fuel',
    },
    {
        id: 'availability',
        numeric: false,
        disablePadding: false,
        label: 'Available',
    },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'RGB(112,155,203)',
        color: theme.palette.common.white,
        fontSize: '20px'
    },
}));

export default function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align="left"
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
                <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};