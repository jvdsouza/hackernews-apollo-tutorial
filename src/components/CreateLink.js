import React, {Component} from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const POST_MUTATION = gql `
    mutation postMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            id
            createdAt
            url
            description
        }
    }
`

class CreateLink extends Component {
    state = {
        description: '',
        url: '',
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {description, url} = this.state;

        return (
            <div>
                <div className="flex flex-column  mt3">
                    <input 
                        className="mb2"
                        value={description}
                        name="description"
                        onChange={this.onChange}
                        type="text"
                        placeholder="A description for the link"
                    />

                    <input 
                        className="mb2"
                        value={url}
                        name="url"
                        onChange={this.onChange}
                        type="text"
                        placeholder="A URL for the link"
                    />
                </div>

                <Mutation mutation={POST_MUTATION} variables={{description, url}}>
                    {(postMutationInput) => (
                        <button onClick={postMutationInput}>Submit</button>
                    )}
                </Mutation>
            </div>
        )
    }
}

export default CreateLink;