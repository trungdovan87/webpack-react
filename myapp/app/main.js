var React = require('react');
var ReactDOM = require('react-dom');

var Content = React.createClass({
    render: function() {
        return (
        <div>
        	<p> It's me 22 trung - do</p>
            <b>Congratulations</b>, you are now ready to implement your client side application! Enjoy :-)
        </div>
        );
    }
});
ReactDOM.render(<Content />, document.getElementById('content'));