var React = require("react");

import * as $ from 'jquery';

class News extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {news: []};
    }
    
    componentDidMount()  {
        const self = this;
        $.get('news.json', function(response) {
            self.setState({news: response.news});
        });
    }
    
    render() {
        
        const list = this.state.news.map((el, index) => {
            return (
            <div key={index} >
                <h3>{el[0]}</h3>
                <div>{el[1]}</div>
            </div>);
        });
        
        return (<div>
                    <div>Новости</div>
                    {list}
                </div>);
    }
    
}
News.defaultProps = {news: []};

export {News};
