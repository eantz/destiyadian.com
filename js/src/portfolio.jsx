var React = require('react');
var func = require('./functions.jsx')

var PortfolioItem = React.createClass({

    handleMoreClick: function(portfolioData, e) {
        e.preventDefault();

        React.render(
            <FullPortfolio portfolioData={portfolioData} />,
            document.getElementById('modal-container')
        );
    },
    render: function() {
        return (
            <div className="portfolio">
                <div className="portfolio-img-container">
                    <img src={'img/' + this.props.portfolioData.thumbnail}  />
                </div>
                <div className="portfolio-desc-container">
                    <h3>{this.props.portfolioData.name}</h3>
                    <div className="portfolio-desc">
                        <i className="fa fa-bullseye"></i> 
                        {this.props.portfolioData.role.map(function(r) {
                            return ' ' + r;
                        }).join(' / ')}
                    </div>
                    <div className="portfolio-desc">
                        <i className="fa fa-cogs"></i> 
                        {this.props.portfolioData.technology.map(function(t) {
                            return ' ' + t;
                        }).join(' / ')}
                    </div>

                    <a href className="btn-more" onClick={this.handleMoreClick.bind(this, this.props.portfolioData)}>More</a>
                </div>
            </div>
        );
    }
});

var FullPortfolio = React.createClass({
    updateDimension: function() {
        var clientS = func.clientSize();
        this.setState({width: clientS[0], height: clientS[1]});
    },
    componentWillMount: function() {
        document.body.classList.add('modal-open');
        this.updateDimension();
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.updateDimension);
    },
    componentWillUnmount: function() {
        document.body.classList.remove('modal-open');
        window.removeEventListener('resize', this.updateDimension);
    },
    handleCloseClick: function(e) {
        e.preventDefault();

        var dom = document.getElementById("full-portfolio-container");
        dom.className = dom.className + ' out';

        setTimeout(function() {
            React.unmountComponentAtNode(document.getElementById('modal-container'));
        }, 400);
    },
    render: function() {
        var styles = {
            width: this.state.width,
            height: this.state.height
        };

        var imgW = {
            'width':0.6 * this.state.width
        }

        var desc = {__html: this.props.portfolioData.description};
        var projecturl = this.props.portfolioData.url == '' ? '' : <a href={this.props.portfolioData.url} className="portfolio-url">({this.props.portfolioData.url})</a>


        return (
            <div id="full-portfolio-container" style={styles}>
                <a href className="btn close-portfolio" onClick={this.handleCloseClick}>
                    X
                </a>
                <div className="portfolio-full-title">
                    <h2>{this.props.portfolioData.name}</h2>
                    {projecturl}
                </div>

                <div className="portfolio-full-body">
                    <div className="portfolio-full-img-container">
                        <img src={'img/' + this.props.portfolioData.bigpic} style={imgW} />
                    </div>
                    <div className="portfolio-full-description-container">
                        <p className="portfolio-full-description-item"><i className="fa fa-cogs"></i> Technology Used : 
                            {this.props.portfolioData.technology.map(function(t) {
                                return t;
                            }).join(' / ')}
                        </p>
                        <p className="portfolio-full-description-item"><i className="fa fa-bullseye"></i> Role : 
                            {this.props.portfolioData.role.map(function(r) {
                                return r;
                            }).join(' / ')}
                        </p>

                        <div className="portfolio-full-description-summary">
                            <h3>Summary</h3>
                            <div className="portolio-full-summary" dangerouslySetInnerHTML={desc} />
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
});

var Portfolio = React.createClass({
    getInitialState: function() {
        return {
            'portfolios':[]
        }
    },
    componentWillMount: function() {
        var thisObj = this;

        $.ajax({
            url:'portfolio.json',
            dataType:'json'
        }).done(function(data) {
            var myportfolio = [];

            data.map(function(d) {
                myportfolio.push(d);
            });

            thisObj.setState({
                portfolios:myportfolio
            });

        }).fail(function() {
            console.log('failed to get portfolio data');
        });
    },
    render: function() {
        return (
            <div>
                <h2>Projects</h2>
                {this.state.portfolios.map(function(portfolio) {
                    return <PortfolioItem key={portfolio.name} portfolioData={portfolio} />;
                })}
            </div>
        );
    }
});

module.exports = Portfolio;