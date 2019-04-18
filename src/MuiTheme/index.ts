import { createMuiTheme } from '@material-ui/core/styles';
import Theme from '../Resources/Theme';

export default createMuiTheme({
    palette: {
        primary: {
            main: Theme.Colors.Primary.main,
            contrastText: Theme.Colors.White
        },
        secondary: Theme.Colors.Secondary,
        error: {
            main: Theme.Colors.Error
        },
        text: {
            primary: Theme.Colors.Text.primary,
            secondary: Theme.Colors.Text.secondary
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontSize: 52
        },
        h2: {
            fontSize: 45
        },
        h3: {
            fontSize: 36
        },
        h4: {
            fontSize: 32
        },
        h5: {
            fontSize: 28
        },
        h6: {
            fontSize: 24,
            color: Theme.Colors.Text.title,
            fontWeight: 'normal'
        },
        subtitle1: {
            fontSize: 16
        },
        subtitle2: {
            fontSize: 14,
            color: Theme.Colors.Text.secondary,
            fontWeight: 'normal'
        },
        body1: {
            fontSize: 16
        },
        body2: {
            fontSize: 14,
            color: Theme.Colors.Text.primary,
        },
        caption: {
            fontSize: 14
        },
        overline: {
            fontSize: 12
        },

    },
    overrides: {

        MuiTypography: {
        },

        MuiButton: {
            root: {

            },
            raised: {

            },
            outlined: {

            },
            contained: {

            },
            disabled: {

            },
            flat: {

            },
            extendedFab: {

            },
            text: {

            },

        },
        MuiInput: {

        },
        MuiInputBase: {
            input: {

            },
        },
        MuiInputLabel: {
            animated: {

            }
        },
        MuiDialog: {
            paperWidthSm: {
                maxWidth: 'unset'
            },
            container: {

            }
        },
        MuiAppBar: {
            root: {
            }
        },
        MuiChip: {
            root: {

            },
            label: {
            },
        },
        MuiFab: {
            sizeSmall: {
                height: 36,
                width: 36
            }
        }
    }
});