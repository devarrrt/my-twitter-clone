import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import App from './App';
import theme from './styles/theme';
import './index.css';



ReactDOM.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<CssBaseline>
				<App />
			</CssBaseline>
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById('root')
);
