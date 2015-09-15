var React = require('react');
var func = require('./functions.jsx');

var Navigation = React.createClass({
            
    handleClick: function(elem, e) {
        e.preventDefault();

        func.scrollToElem(elem);
    },
    render: function() {
        return (
            <ul>
                <li id="nav-to-home"><a href="http://destiyadian.com"><span className="nav-mobile">d</span> <span className="nav-desktop">destiyadian.com</span></a></li>
                <li><a href="#about" onClick={this.handleClick.bind(this, 'about')}><i className="fa fa-question-circle"></i> <span className="nav-desktop">About</span></a></li>
                <li><a href="#portfolio" onClick={this.handleClick.bind(this, 'portfolio')}><i className="fa fa-cubes"></i> <span className="nav-desktop">Projects</span></a></li>
                <li><a href="#contact" onClick={this.handleClick.bind(this, 'contact')}><i className="fa fa-envelope"></i> <span className="nav-desktop">Contacts</span></a></li>
                <li><a href="http://blog.destiyadian.com" target="_blank"><i className="fa fa-newspaper-o"></i> <span className="nav-desktop">Blog</span></a></li>
            </ul>
        );
    }
});

var MainNav = React.createClass({
    addGhostMenu: function() {
        var doc = document.documentElement;
        var topW = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        var ghostMenu = document.getElementById('top-menu-ghost').innerHTML;
        if(topW >= 200 && ghostMenu == "") {
            console.log('rendered');
            React.render(
                <Navigation />,
                document.getElementById('top-menu-ghost')
            );
        } else if(topW < 200 && ghostMenu != "") {
            console.log('removed');
            var ghostContainer = document.getElementById('top-menu-ghost').getElementsByTagName('ul');
            ghostContainer[0].className = 'out';

            setTimeout(function() {
                React.unmountComponentAtNode(document.getElementById('top-menu-ghost'))
            }, 700);
            
        }
    },
    componentDidMount: function() {
        window.addEventListener('scroll', this.addGhostMenu);
    },
    render: function() {
        return (
            <Navigation />
        );
    }
});

module.exports = MainNav;