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

    // why i got an error from esLint
    // when i use anonymous func inside of class ,
    // it say "[eslint] Parsing error: Unexpected token ="
    // should i use bind ?
    gantiContent = (postId) => {
        if (!this.state.singlePage) {
            return <ContentList data={this.state.content}
                    singlePage={this.singlePage} />
        } else {
            return <SinglePage data={this.state.singlePageData} />
        }
    }

    // The data stored here 🏬 .. maybe
    singlePage = (e) => {
        if(!this.state.singlePage) {
            this.setState({
                singlePage: true,
                singlePageData: this.state.content[e],
            });

            historyPushState(
                {contentId: e},
                `/post/${e}`
            )
        }
        return this.gantiContent(e)
    }

    render(){
        return(
            <div>
                <Header brand={this.state.Brand}/>
                
                {this.gantiContent()}
            </div>
        )
    }
}