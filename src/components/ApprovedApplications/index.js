import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

/**
 *  ApprovedApplication Component showing a list of approved applications.
 */

class ApprovedApplications extends React.Component{
    constructor(){
        super();
        this.state = {
            rows: [
                {id: 0, reason: 'Sjukdom', startDate: '2019-01-02', endDate: '2019-01-02', approvedBy: 'Admin', currentDate: '2019-01-01'},
                {id: 1, reason: 'Ledighet', startDate: '2019-01-03', endDate: '2019-01-03',approvedBy: 'Admin', currentDate: '2019-01-02'},
                {id: 2, reason: 'Tjänsteresa', startDate: '2019-01-05', endDate: '2019-01-04',approvedBy: 'Admin', currentDate: '2019-01-03'},
                {id: 3, reason: 'Sjukdom', startDate: '2019-01-07', endDate: '2019-01-05',approvedBy: 'Admin', currentDate: '2019-01-04'},
            ]
        }
    }
    render(){
        const {classes} = this.props;
        return(
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Anledning</CustomTableCell>
                            <CustomTableCell>Från</CustomTableCell>
                            <CustomTableCell>Till</CustomTableCell>
                            <CustomTableCell>Beviljad av</CustomTableCell>
                            <CustomTableCell>Datum</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row,index) => {
                            return(
                                <TableRow className={classes.row} key={row.id}>
                                    <CustomTableCell component="th" scope="row">{row.reason}</CustomTableCell>
                                    <CustomTableCell component="th" scope="row">{row.startDate}</CustomTableCell>
                                    <CustomTableCell component="th" scope="row">{row.endDate}</CustomTableCell>
                                    <CustomTableCell component="th" scope="row">{row.approvedBy}</CustomTableCell>
                                    <CustomTableCell component="th" scope="row">{row.currentDate}</CustomTableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
          },
    },
});

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: 'rgba(166, 166, 166)',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 12,
    },
}))(TableCell);

ApprovedApplications.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApprovedApplications);