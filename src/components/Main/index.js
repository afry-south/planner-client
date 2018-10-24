import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TopBar from '../TopBar/index';
import InfoCard from '../InfoCard/index';
import ApprovedApplications from '../ApprovedApplications/index';
import PendingApplications from '../PendingApplications/index';
import TypoGraphy from '@material-ui/core/Typography';

/**
 * Main component which functions as a container for the rest of the components.
 */
class Main extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div>
                <div>
                    <TopBar/>
                    <InfoCard/>
                </div>
                <div className={classes.root}>
                    <div className={classes.item}>
                    <div className={classes.text}>
                        <TypoGraphy variant="display1" className={classes.text} color="default">
                            Beviljad ledighet
                        </TypoGraphy>
                    </div>
                        <ApprovedApplications/>
                        <PendingApplications/>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '50px'
    },
    item: {
        maxWidth: '60%',
    },
    text: {
        marginLeft: 'auto',
        float: 'left',
        fontSize: 16,
        color: 'black',
        marginTop: '10px',
        marginBottom: '10px'
    },
})

export default withStyles(styles)(Main);