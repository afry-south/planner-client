import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

/**
 * InfoCard component showing information about the application.
 */
class InfoCard extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="display3" className={classes.title} color="primary">
                        Vaccation And Abscense Planner
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        I Vaccation and Abscense Planner lägger du till önskad semester, övrig ledighet
                        samt kommmande tjänsteresor
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

const styles = {
    card: {
        flexGrow: 1,
        backgroundColor: 'rgba(0, 170, 255)'
    },
    title: {
        marginBottom: 16,
        fontSize: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '64%',
        color: 'white'
    },
    pos: {
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '57px',
        color: 'white'
    },
};

InfoCard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InfoCard);