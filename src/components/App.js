import React, {Component} from 'react';
// import Components
// The laziest name i've ever made
import Header from './Header/Header';
import ContentList from './Content/ContentList';
import SinglePage from './Single/Single';

var onPopState = (e) => 
    window.onpopstate(e);

// Change the url with built-in module
// obj will change the data, title, and the url
var historyPushState = (obj, url) =>
    window.history.pushState(obj, '', url)

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Brand: 'Re Commerce',
            content: this.props.initialData,
        };
    };

    // uhh.. i dont know how to use
    // React lifecycle properly
    componentWillUnmount() {
        // do something here..
    }

    // why i got an error from esLint
    // when i use anonymous func inside of class ,
    // it say "[eslint] Parsing error: Unexpected token ="
    // should i use bind ?
    gantiContent = (postId) => {
        if (!this.state.singlePage || this.state.singlePage == false) {
            return <ContentList data={this.state.content}
                    singlePage={this.singlePage} />
        } else {
            return <SinglePage {...this.state.content} />
        }
    }

    // The data stored here 🏬 .. maybe
    singlePage = (e) => {
        this.setState({
            singlePage: true,
            content: this.state.content[e]
        });
        historyPushState({contentId: e}, `/post/${e}`)
        return this.gantiContent(e)
    }

    backToHome = () => {
        if (this.state.singlePage) {
            this.setState({
                singlePage: false,
                content: this.props.initialData
            })
            historyPushState({contentId: null}, '/')
        }
    }

    render(){
        return(
            <div>
                <Header brand={this.state.Brand} 
                    backToHome={this.backToHome} 
                    singlePage={this.state.singlePage} />
                
                {this.gantiContent()}
            </div>
        )
    }
}