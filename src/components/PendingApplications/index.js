import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ApplicationDialog from '../ApplicationDialog/index';
import SnackBar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import InfoIcon from '@material-ui/icons/Info';

/**
 * PendingApplications component showing a list of pending applications.
 */
class PendingApplications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {id: 0, reason: 'Sjukdom', startDate: '2019-01-02', endDate: '2019-01-03'},
                {id: 1, reason: 'Ledighet', startDate: '2019-01-05', endDate: '2019-01-06'},
            ],
            openSnackBar: false,
            vertical: 'bottom',
            horizontal: 'center'
        }
    }

    handleOpenSnackBar = () => {
        this.setState({
            openSnackBar: true,
        });
    };

    handleCloseSnackBar = () => {
        this.setState({
            openSnackBar: false,
        });
    };

    deleteRows = (index) => {
        const newRowArray =  this.state.rows.slice(0,index).concat(this.state.rows.slice(index+1));
        this.setState({
            rows: newRowArray
        });
        this.handleOpenSnackBar();
    }

    getData = (rowEntry) => {
        var objEntry = rowEntry[0];
        var newObj = Object.assign(objEntry, {id: this.state.rows.length + 1});
        this.setState({
            rows: [...this.state.rows,newObj]
        });
    }
    
    render(){
        const {classes} = this.props;
        const {openSnackBar} = this.state;
        const {vertical, horizontal} = this.state;

        return(
            <div className={classes.container}>
            <ApplicationDialog dataToParent={this.getData}/>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                        <CustomTableCell>Anledning</CustomTableCell>
                        <CustomTableCell>Från</CustomTableCell>
                        <CustomTableCell>Till</CustomTableCell>
                        <CustomTableCell></CustomTableCell>    
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row,index) => {
                            return(
                                <TableRow className={classes.row} key={index}>
                                    <CustomTableCell component="th" scope="row">{row.reason}</CustomTableCell>
                                    <CustomTableCell component="th" scope="row">{row.startDate}</CustomTableCell>
                                    <CustomTableCell component="th" scope="row">{row.endDate}</CustomTableCell>
                                    <IconButton onClick={() => this.deleteRows(index)} component="th" scope="row" aria-label="Delete">
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Paper>
            <SnackBar
                    anchorOrigin={{vertical, horizontal}}
                    open={openSnackBar}
                    onClose={this.handleCloseSnackBar}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    autoHideDuration={2000}
                >
                <SnackbarContent
                    message={
                        <span id="delete-snackbar"
                        className={classes.iconMessage}
                        >
                        <InfoIcon className={classes.iconVariant}/>
                        Ansökan borttagen!
                        </span>
                    }
                    className={classes.infoIcon}
                >
                </SnackbarContent>
                </SnackBar>
            </div>
        )
    }
}

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: 'rgba(166, 166, 166)',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 12,
    },
}))(TableCell);

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
    button: {
        float: 'left',
        marginBottom: '10px'
    },
    container: {
        marginTop: '25px'
    },
    infoIcon: {
        backgroundColor: theme.palette.primary.dark,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    iconMessage: {
        display: 'flex',
        alignItems: 'center',
    },
});

PendingApplications.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PendingApplications)