import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Components
// The laziest name i've ever made
import Header from './Header/Header';
import ContentList from './Content/ContentList';
import SinglePage from './Single/Single';

const onPopState = (e) => 
    window.onpopstate(e);

// Change the url with built-in module
// obj will change the data, title, and the url
const historyPushState = (obj, url) =>
    window.history.pushState(obj, '', url)

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Brand: 'Re Commerce',
            content: this.props.initialData,
        };
    };

    // The data stored here 🏬 .. maybe
    singlePage(e) {
        historyPushState({contentId: e}, `/post/${e}`)
    }

    backToHome() {
        historyPushState({contentId: null}, '/')
    }

    render(){
        return(
            <div className="container">
                <Header brand={this.state.Brand} 
                    backToHome={this.backToHome} 
                    singlePage={this.state.singlePage}
                    dataContent={this.props.initialData} />
                
                <div className="content">
                    <ContentList />
                </div>
            </div>
        )
    }
}