import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        axios.get('https://joes-autos.herokuapp.com/api/vehicles')
            .then( res => {
                this.setState({
                    cars: res.data
                })
            })
    }

    render() {
        let carList = this.state.cars.map( car => {
            return (
                <div key={car.id}>
                    <p>Make: {car.make}</p>
                    <p>Model: {car.model}</p>
                    <Link to={`/details/${car.id}`}>
                        <button>
                            Details about {car.make} {car.model}
                        </button>
                    </Link>
                    <hr />
                </div> 
            )
        })
        return (
            <div>
                <h3>Car List:</h3>
                {carList}
            </div> 
        )
    }
}