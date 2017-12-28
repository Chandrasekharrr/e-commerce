import React, {Component} from 'react';

// import Components
// The laziest name i've ever made
import Header from './Header/Header';
import ContentList from './Content/ContentList';
import SinglePage from './Single/Single';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Brand: 'Re Commerce',
            content: this.props.initialData,
        };
    };

    // why i got error from esLint
    // when i use anonymous func inside of class ?,
    // it say "[eslint] Parsing error: Unexpected token ="
    gantiContent = (postId) => {
        if (!this.state.singlePage) {
            return <Content data={this.state.content}
                    singlePage={this.singlePage} />
        } else {
            return <SinglePage data={this.state.content[postId]} />
        }
    }

    // The data stored here 🏬 .. maybe
    singlePage = (e) => {
        if(!this.state.singlePage) {
            this.setState({
                singlePage: true,
            });
        }
        console.log(this.state.content[e])
    }

    render(){
        return(
            <div>
                <Header Brand={this.state.Brand}/>

                {/* {this.gantiContent()} */}
                <ContentList data={this.state.content}
                    singlePage={this.singlePage} />
            </div>
        )
    }
}