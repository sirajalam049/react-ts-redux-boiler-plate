import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import MuiTheme from './MuiTheme';
import LoopFront from 'loop-front';
import RootLayout from './Screens/RootLayout';

interface IProps { }

class App extends Component<IProps> {

    constructor(props: IProps) {
        super(props);
        LoopFront.init('http://api.garbagevalue.com/api/');
    }

    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={MuiTheme} >
                    <RootLayout />
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;