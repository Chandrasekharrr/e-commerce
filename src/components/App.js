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

    gantiContent = (postId) => {
        if (!this.state.singlePage) {
            return <Content data={this.state.content}
                    singlePage={this.singlePage} />
        } else {
            return <SinglePage data={this.state.content[postId]} />
        }
    }

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