import React from "react";
import "./About.css"

class About extends React.Component {
    render() {
        const imageStyle = {
            height: 200,
            width: 300,
            "marginLeft": 50,
            "marginBottom": 20
            
            
        }
        const imageTwo = {
            height: 190,
            width: 160,
            "marginLeft": 105,
            "marginBottom": 20


        }
        const profiles = {
        width: 400,
        "marginLeft": 275,
        "marginTop": 30
        }

    return(
    <div>
        {/* <div className="green">
            <p>This is the about page</p>
        </div> */}
        <h5>About the Devs</h5>
            <div className="profiles" style={profiles}>
            <p>Marshmallow ice cream chupa chups toffee pastry pudding. Macaroon dessert sugar plum icing bonbon. Dessert cookie muffin chocolate liquorice dragée powder danish bear claw. Tootsie roll dragée jelly-o gingerbread. Topping wafer lemon drops tart gummi bears pie sugar plum icing sesame snaps. Candy chocolate cake sugar plum. Cotton candy ice cream cheesecake cupcake donut topping danish jelly-o. Caramels tart lemon drops. Cotton candy macaroon gingerbread sweet fruitcake carrot cake muffin. Lemon drops biscuit cheesecake chocolate bar. Danish tiramisu cake gingerbread donut. Donut sweet roll sugar plum muffin cake topping gummi bears carrot cake cookie.</p>
            <img style={imageStyle} className="" alt="" src="./images/Saijai.jpg" />
        
        </div> 
        <div className="profiles" style={profiles}>
        <p>Marshmallow ice cream chupa chups toffee pastry pudding. Macaroon dessert sugar plum icing bonbon. Dessert cookie muffin chocolate liquorice dragée powder danish bear claw. Tootsie roll dragée jelly-o gingerbread. Topping wafer lemon drops tart gummi bears pie sugar plum icing sesame snaps. Candy chocolate cake sugar plum. Cotton candy ice cream cheesecake cupcake donut topping danish jelly-o. Caramels tart lemon drops. Cotton candy macaroon gingerbread sweet fruitcake carrot cake muffin. Lemon drops biscuit cheesecake chocolate bar. Danish tiramisu cake gingerbread donut. Donut sweet roll sugar plum muffin cake topping gummi bears carrot cake cookie.</p>
        <img style={imageTwo} className="" alt="" src="./images/maria.jpg" />
        </div>   
    </div>
    )}
}

export default About;