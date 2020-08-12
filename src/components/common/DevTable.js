import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {IconButton, Paper} from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import Grid from "@material-ui/core/Grid";
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function TablePaginationActions(props) {
    const {count, page, rowsPerPage, onChangePage} = props;

    const handleFirstPageButtonClick = event => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = event => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = event => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = event => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div style={{
            flexShrink: 0,
            marginRight: 8,
        }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                <LastPageIcon/>
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                <KeyboardArrowRight/>
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                <KeyboardArrowLeft/>
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                <FirstPageIcon/>
            </IconButton>
        </div>
    );
}

class DevTable extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 0, rowsPerPage: 10}
    }

    CustomeCell = (props) => {

        const {row, column} = props;
        switch (column.type) {
            case "CustomCell":
                return (<column.component {...column.componentProps} row
                                          column/>);
            case "PersianDate":
                return (<TableCell
                    style={{textAlign: "center"}}
                    component="th"
                    scope="row"
                >
                    {
                        row[column.name] && row[column.name].toString().length > 10 ? new Date((parseInt(row[column.name]))).toLocaleDateString('fa-IR', {
                            month: "2-digit",
                            day: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        }) : ""
                    }
                </TableCell>);
            default:
                return (<TableCell
                    style={{textAlign: "center"}}
                    component="th"
                    scope="row"
                >
                    {row[column.name]}
                </TableCell>)
        }


    }
    handleChangePage = (event, newPage) => {
        this.props.getCurrentPage(newPage + 1, this.state.rowsPerPage);
        this.setState({page: newPage})
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage: parseInt(event.target.value, 10), page: 0})
    }

    render() {
        // const {rows, columns} = this.state;
        const {rows, columns, totalRows} = this.props;
        const {rowsPerPage, page} = this.state;


        return (
            <TableContainer component={Paper}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => {
                                return (<TableCell style={{textAlign: "center"}}>
                                    <h4>{column.title}</h4>
                                </TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                {columns.map(column => {
                                    if (column.cellCustom) {
                                        return (<TableCell
                                            style={{textAlign: "center"}}
                                            component="th"
                                            scope="row"
                                        >
                                            <column.cellCustom row={row}/>
                                        </TableCell>)
                                    } else {
                                        return (
                                            <this.CustomeCell column={column} row={row}/>
                                        )
                                    }
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    labelRowsPerPage={"نمایش در هر صفحه"}
                    ActionsComponent={TablePaginationActions}
                    labelDisplayedRows={({from, to, count}) => (`${from}-${to === -1 ? count : to} از ${count}`)}
                    rowsPerPageOptions={[10]}
                    component="div"
                    count={totalRows}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </TableContainer>
        );
    }
}

DevTable.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    getCurrentPage: PropTypes.func,
    totalRows: PropTypes.number,
};

export default DevTable;
