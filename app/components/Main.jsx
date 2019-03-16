var React = require("react");

class Main extends React.Component {
    
    constructor(props) {
       super(props);
       this.message = 'Hello world!';
    }
    
    render() {
        return (
        <div>
            <h1>{this.message}</h1>
        </div>);
    }
    
}

export {Main};
