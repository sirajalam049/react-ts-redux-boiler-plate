import React, { Component } from 'react'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import _ from 'lodash'
import MuiTheme from '../MuiTheme';
import AppNavigation from '../AppNavigation';

interface IProps extends WithStyles<typeof STYLES> { }

class RootLayout extends Component<IProps> {

    render() {
        const { classes } = this.props
        return (
            <div>
                <AppNavigation />
            </div>
        )
    }
}

const STYLES = (theme: typeof MuiTheme) => createStyles({

})

export default withStyles(STYLES)(RootLayout)