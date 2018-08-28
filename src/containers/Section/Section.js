import React, { Component } from 'react';

import axios from '../../axios-config';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Article from '../../components/Content/Article/Article';

class Section extends Component {

    state = {
        loadedContent: null
    }

    componentDidMount () {
        
        this.loadData();  
    }

    componentDidUpdate () {
        
        this.loadData(); 
    }

    loadData () {

        if ( !this.state.loadedContent || this.state.loadedContent.linkTitle !== this.props.loadContent ) {
		let contentToLoad = this.props.loadContent;

        axios.get('/pages/' + contentToLoad + '.json')
            .then(response => {
                console.log(response.data);
                this.setState( { loadedContent: response.data } );
            })
            .catch(err => {
                this.setState({loading: false});
            });
        }
    }


        render() {
            let post = null;
            if ( this.props.match.params.id ) {
                post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
            }
            if ( this.state.loadedContent ) {
                post = (
                    <Article data={this.state.loadedContent} />
                );
            }
            return post;
        }
    }

// export default withErrorHandler(Section, axios);
export default Section;