var React = require('react');
var ReactDOM = require('react-dom');
// import 'whatwg-fetch';

let data = JSON.stringify('trung');
let url = "http://localhost:8080/pce/app_form_api/post";
// fetch(url)
let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");


fetch(url,  {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Cors': 'true'
      },
    data
})
.then(res => res.json())
.then(json => {
    console.log("response: ", json)
});

class Content extends React.Component {
    render() {
        return (
        <div>
        	<p> It's me - TRUNG</p>
            <b>Congratulations</b>, you are now ready to implement your client side application! Enjoy :-)
        </div>
        );
    }
}
ReactDOM.render(<Content />, document.getElementById('content'));