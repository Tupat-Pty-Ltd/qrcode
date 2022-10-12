import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {visuallyHidden} from '@mui/utils';
import {alpha, Button, Divider, Menu, MenuItem, styled} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GenerateLicencesDialogs from "./GenerateLicensesDialog";

function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

const rows = [
    createData('Cupcake', 305, 3.7, 67),
    createData('Donut', 452, 25.0, 51),
    createData('Eclair', 262, 16.0, 24),
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Gingerbread', 356, 16.0, 49),
    createData('Honeycomb', 408, 3.2, 87),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Jelly Bean', 375, 0.0, 94),
    createData('KitKat', 518, 26.0, 65),
    createData('Lollipop', 392, 0.2, 98),
    createData('Marshmallow', 318, 0, 81),
    createData('Nougat', 360, 19.0, 9),
    createData('Oreo', 437, 18.0, 63),
];

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
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

const headCells = [
    {
        id: 'dept',
        numeric: false,
        disablePadding: true,
        label: 'Dept Name',
    },
    {
        id: 'category',
        numeric: true,
        disablePadding: false,
        label: 'Category',
    },
    {
        id: 'tracking',
        numeric: true,
        disablePadding: false,
        label: 'Tracking Id',
    },
    {
        id: 'requestDate',
        numeric: true,
        disablePadding: false,
        label: 'Request Date',
    },
    {
        id: 'action',
        numeric: true,
        disablePadding: false,
        label: 'Action',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
];

function LicensesTable(props) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
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
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

LicensesTable.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const {numSelected} = props;

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between",

            }}>
                <Typography>
                    Requests
                </Typography>
                <div style={{
                    left: '20rem',
                    marginLeft: '30rem',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <input style={{
                        width: '176px',
                        height: '29px',
                        border: "1px solid #CFD3D5",
                        borderRadius: '4px',
                        padding: '9px 4px 9px 40px',
                        marginRight: '1rem',
                        background: 'transparent url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' class=\'bi bi-search\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center',
                    }} type='search'/>
                    <div className="right flex-row-vstart-hstart">
                        <div className="tablebuttons flex-row-vcenter-hcenter">
                            <div className="label-container flex-row-vcenter-hcenter">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e177nonrsrr-I1807%3A37993%3B22%3A9530?alt=media&token=3cffb19d-860e-4aa7-95b4-0758df3faf37"
                                    alt="Not Found"
                                    className="fi-filter"
                                />
                                <p className="txt-0102 flex-hcenter">Filter</p>
                            </div>
                        </div>
                        <div className="tablebuttons flex-row-vcenter-hcenter">
                            <div className="label-container flex-row-vcenter-hcenter">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e177nonrsrr-I1807%3A37994%3B22%3A9530?alt=media&token=376fe473-fd8f-43e8-8850-7bc95cd039b9"
                                    alt="Not Found"
                                    className="fi-filter"
                                />
                                <p className="txt-0102 flex-hcenter">Filter</p>
                            </div>
                        </div>
                        <div className="tablebuttons-1 flex-row-vcenter-hcenter">
                            <div className="label-container flex-row-vcenter-hcenter">
                                <p className="txt-151 flex-hcenter">Bulk Action</p>
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e177nonrsrr-I1807%3A37995%3B22%3A9537?alt=media&token=4f20bdeb-7f04-45bf-b10d-80164958e190"
                                    alt="Not Found"
                                    className="fi-chevron-down"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openGenDialog, setOpenGenDialog] = useState(false);
    const open = Boolean(anchorEl);
    const handleGenerate = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setOpenGenDialog(true)
        setAnchorEl(null);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
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

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{width: '100%',}}>
            <Paper sx={{width: '100%', mb: 2}}>
                <EnhancedTableToolbar numSelected={selected.length}/>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <LicensesTable
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                            <TableCell align="left">
                                                <Button
                                                    id="demo-customized-button"
                                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    variant="contained"
                                                    disableElevation
                                                    onClick={handleGenerate}
                                                    endIcon={<ArrowDropDownIcon />}
                                                    sx={{
                                                        background: '#8B8D97',
                                                        width: '90px',
                                                        height: '20px',
                                                        fontFamily: 'Inter',
                                                        fontStyle: 'normal',
                                                        fontWeight: '400',
                                                        fontSize: '12px',
                                                        lineHeight: '15px',
                                                        borderRadius:'20px'
                                                    }}
                                                >
                                                    Options
                                                </Button>
                                                <StyledMenu
                                                    id="demo-customized-menu"
                                                    MenuListProps={{
                                                        'aria-labelledby': 'demo-customized-button',
                                                    }}
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                >
                                                    <MenuItem onClick={handleClose} disableRipple>
                                                        Generate
                                                    </MenuItem>
                                                    <MenuItem onClick={handleClose} disableRipple>
                                                        Validate
                                                    </MenuItem>
                                                    <MenuItem onClick={handleClose} disableRipple>
                                                        Blacklist
                                                    </MenuItem>
                                                    <MenuItem onClick={handleClose} disableRipple>
                                                        Whitelist
                                                    </MenuItem>
                                                </StyledMenu>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Button color='secondary' variant='contained' sx={{
                                                    background: 'rgba(147, 50, 143, 0.16)',
                                                    width: '90px',
                                                    height: '20px',
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '12px',
                                                    lineHeight: '15px',
                                                    borderRadius:'20px'
                                                }}>
                                                    Awaiting
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6}/>
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
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense}/>}
                label="Dense padding"
            />
            <GenerateLicencesDialogs openGenDialog={openGenDialog} setOpenGenDialog={setOpenGenDialog}/>
        </Box>
    );
}
