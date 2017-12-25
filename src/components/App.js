import React, {Component} from 'react';

// import Components
import Header from './Header/Header'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Brand: 'ReCommerce'
        }
    }

    render(){
        return(
            <Header Brand={this.state.Brand}/>
        )
    }
}