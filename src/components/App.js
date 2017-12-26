import React, {Component} from 'react';

// import Components
import Header from './Header/Header';
import Content from './Content/Content';

// import api
import * as api from '../../controllers/content';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Brand: 'Re Commerce',
            content: this.props.initialData,
        };
    };

    render(){
        return(
            <div>
                <Header Brand={this.state.Brand}/>

                <Content data={this.state.content} />
            </div>
        )
    }
}