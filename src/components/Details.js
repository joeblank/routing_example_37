import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: {}
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get('https://joes-autos.herokuapp.com/api/vehicles/' + id)
            .then(res => {
                this.setState({
                    car: res.data[0]
                })
            })
    }

    render() {
        let {car} = this.state;
        return (
            <div>
                <h2>Details Route:</h2>
                <p>Make: {car.make}</p>                
                <p>Model: {car.model}</p>                
                <p>Price: {car.price}</p>                
                <p>Color: {car.color}</p> 
                <p>ID: {car.id}</p>  
                <hr />
                <Link to='/'>
                    <button>BACK</button>
                </Link>
            </div> 
        )
    }
}