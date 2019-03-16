var React = require("react");

class News extends React.Component {
    
    render() {
        
        const list = this.props.news.map((el, index) => {
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
