import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogTitle, DialogContentText, MenuItem } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SnackBar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import green from '@material-ui/core/colors/green';
import SnackbarContent from '@material-ui/core/SnackbarContent';

/*
 *  Application Dialog Component for handling new applications.
*/
class ApplicationDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            reasonValue: '',
            startDate: '',
            endDate: '',
            rowEntry: [],
            openSnackBar: false,
            vertical: 'bottom',
            horizontal: 'center'
        }
    }

    handleOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    handleOpenSnackBar = () => {
        this.setState({
            openSnackBar: true,
        });
    };

    handleCloseSnackBar = () => {
        this.setState({
            openSnackBar:false,
        });
    };

    handleSubmit = () => {
        var newObj = {reason: reasons[this.state.reasonValue].label, startDate: this.state.startDate, endDate: this.state.endDate}
        var newRow = this.state.rowEntry[0] = newObj;
        this.setState({
            rowEntry: newRow
        });
        this.handleClose();
        this.handleOpenSnackBar();
        this.props.dataToParent(this.state.rowEntry);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleDateChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render(){
        const {classes} = this.props;
        const {openSnackBar} = this.state;
        const {vertical, horizontal} = this.state;

        return(
            <div>
                <Button
                className={classes.button}
                variant="fab"
                color="default"
                aria-label="Add" 
                onClick={this.handleOpen}
                >
                <AddIcon/>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    disableEscapeKeyDown={true}
                    disableBackdropClick={true}
                >
                <DialogTitle id="form-dialog-title">Ny Ansökan</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ange anledning för frånvaro samt start och slut datum.
                    </DialogContentText>
                    <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-select-reason"
                        select
                        label="Välj anledning till frånvaro"
                        className={classes.textField}
                        value={this.state.reasonValue}
                        onChange={this.handleChange('reasonValue')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            },
                        }}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    >
                    {reasons.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    </form>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="startDate"
                            label="Start datum för frånvaro"
                            type="date"
                            value={this.state.startDate}
                            onChange={this.handleDateChange('startDate')}
                            className={classes.dateTextField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        >
                        </TextField>
                    </form>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="endDate"
                            label="Slut datum för frånvaro"
                            type="date"
                            value={this.state.endDate}
                            onChange={this.handleDateChange('endDate')}
                            className={classes.dateTextField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        >
                        </TextField>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                    onClick={this.handleClose}
                    color="default"
                    variant="contained"
                    className={classes.button}
                    >Cancel
                    </Button>
                    <Button
                    onClick={this.handleSubmit}
                    color="default"
                    variant="contained"
                    className={classes.button}
                    >Submit
                    </Button>
                </DialogActions>
                </Dialog>
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
                        <span id="success-snackbar"
                        className={classes.iconMessage}
                        >
                        <CheckCircleIcon className={classes.iconVariant}/>
                        Ny ansökan utförd!
                        </span>
                    }
                    className={classes.successIcon}
                >
                </SnackbarContent>
                </SnackBar>
            </div>
        )
    }
}

const styles = theme => ({
    button: {
        float: 'left',
        marginBottom: '25px',
        margin: theme.spacing.unit
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 500
    },
    dateTextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
        marginTop: '15px'
    },
    successIcon: {
        backgroundColor: green[600],
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

const reasons = [
    {
        value: '0',
        label: 'Sjukdom'
    },
    {
        value: '1',
        label: 'Ledighet'
    },
    {
        value: '2',
        label: 'Tjänsteresa'
    },
    {
        value: '3',
        label: 'Övrigt'
    }
]

ApplicationDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicationDialog);