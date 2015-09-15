var React = require('react');

var Skillset = React.createClass({
    getInitialState: function() {
        return {
            'skills':[]
        }
    },
    handleClick: function(summary, e) {
        var dom = document.getElementById("skillset-desc");
        dom.className = dom.className + ' out';

        var desc = e.target.innerHTML;

        setTimeout(function() {
            React.render(
                <SkillsetDesc skill={desc} summary={summary} />,
                document.getElementById('skillset')
            );
        }, 1000)

        
        
    },
    componentWillMount: function() {
        var thisObj = this;

        $.ajax({
            url:'skill.json',
            dataType:'json'
        }).done(function(data) {
            var myskills = [];

            data.map(function(d) {
                myskills.push(d);
            });

            thisObj.setState({
                skills:myskills
            });

        }).fail(function() {
            console.log('failed to get skill data');
        });
    },
    render: function() {
        var thisObj = this;
        return (
            <div id="skillset-desc">
                <h2>Skillset</h2>
                <p>
                {this.state.skills.map(function(skill) {
                    return <span className={"skillset " + skill.level} key={skill.name} onClick={thisObj.handleClick.bind(thisObj, skill.summary)}>{skill.name}</span>;
                })}
                </p>
            </div>
        );
    }
});

var SkillsetDesc = React.createClass({
    handleClick: function(e) {
        var dom = document.getElementById("skillset-desc");
        dom.className = dom.className + ' out';

        setTimeout(function() {
            React.render(
                <Skillset />,
                document.getElementById('skillset')
            );
        }, 1000);

    },
    render: function() {
        return (
            <div id="skillset-desc">
                <h3><i className="fa fa-arrow-left" id="skillset-close" onClick={this.handleClick}></i>  Skillset : {this.props.skill}</h3>
                <p>
                    {this.props.summary}
                </p>
                
            </div>
            
        );
    }
});

module.exports = Skillset;