import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FilterReviews = ({ filter, handleFilterChange }) => (
    <FormControl fullWidth variant="outlined" style={{ marginBottom: '16px' }}>
        <InputLabel>Filter Reviews</InputLabel>
        <Select value={filter} onChange={handleFilterChange} label="Filter Reviews">
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="mostPositive">Most Positive</MenuItem>
            <MenuItem value="mostCritical">Most Critical</MenuItem>
        </Select>
    </FormControl>
);

export default FilterReviews;