// Include the Main React Dependencies
import React from "react"
import ReactDOM from "react-dom"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Include the Main Component
import Main from './Components/Main.jsx'

const muiTheme = getMuiTheme({
  slider: {
    handleSize: 20,
    selectionColor: "rgba(75, 162, 142, 0.870588)"
  },
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Main />
  </MuiThemeProvider>
);

// This code here allows us to render our main component
ReactDOM.render(

	<App />,
	document.getElementById('app')
)