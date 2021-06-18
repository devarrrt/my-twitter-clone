import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux'

import { store } from './redux/store';
import App from './App';
import theme from './styles/theme';
import './index.css';



ReactDOM.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<CssBaseline>
				<Provider store={ store }>
				<App />
				</Provider>
			</CssBaseline>
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById('root')
);
