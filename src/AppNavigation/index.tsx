import React, { Component } from 'react'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import MuiTheme from '../MuiTheme';
import { Switch, Route } from 'react-router';

interface IProps extends WithStyles<typeof STYLES> { }

class AppNavigation extends Component<IProps> {

    render() {
        const { classes } = this.props
        return (
            <div>
                <Switch>
                    <Route />
                </Switch>
            </div>
        )
    }
}

const STYLES = (theme: typeof MuiTheme) => createStyles({

})

export default withStyles(STYLES)(AppNavigation)