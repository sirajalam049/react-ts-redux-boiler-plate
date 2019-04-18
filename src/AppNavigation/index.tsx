import React, { Component } from 'react'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import _ from 'lodash'
import MuiTheme from '../MuiTheme';

interface IProps extends WithStyles<typeof STYLES> { }

class AppNavigation extends Component<IProps> {

    render() {
        const { classes } = this.props
        return (
            <div>

            </div>
        )
    }
}

const STYLES = (theme: typeof MuiTheme) => createStyles({

})

export default withStyles(STYLES)(AppNavigation)