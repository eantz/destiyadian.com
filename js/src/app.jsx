var React = require('react');

var MainNav = require('./nav.jsx');
var Skillset = require('./skillset.jsx');
var Portfolio = require('./portfolio.jsx');

React.render(
    <MainNav />,
    document.getElementById('top-menu')
);

React.render(
    <Skillset />,
    document.getElementById('skillset')
);

React.render(
    <Portfolio />,
    document.getElementById('portfolio')
);