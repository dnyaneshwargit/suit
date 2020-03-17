import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css';

import Suit from './components/Suit/Suit';
import 'react-perfect-scrollbar/dist/css/styles.css';

ReactDOM.render(<Suit />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA