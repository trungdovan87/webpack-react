var React = require('react');
var ReactDOM = require('react-dom');

let url = "http://localhost:8080/pce/app_form_api/rest?cors=true";
fetch(url)
.then(response => {
    console.log("response: ", response)
    return response.json();
});

var Content = React.createClass({
    render: function() {
        return (
        <div>
        	<p> It's me 3</p>
            <b>Congratulations</b>, you are now ready to implement your client side application! Enjoy :-)
        </div>
        );
    }
});
ReactDOM.render(<Content />, document.getElementById('content'));