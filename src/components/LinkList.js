import React, {Component} from 'react';
import Link from './Link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const FEED_QUERY = gql`
    {
        feed {
            links {
                id
                createdAt
                url
                description
            }
        }
    }
`

class LinkList extends Component {
    render() {
        
        return (
            <div>
                <Query query={FEED_QUERY}>
                    {({loading, error, data}) =>  {
                        if (loading) return <div>Fetching data</div>
                        if (error) return <div>Error fetching data</div>

                        const linksToRender = data.feed.links

                        return (
                            <div>
                                {linksToRender.map(link => {
                                    return (
                                        <div>
                                            <Link key={link.id} link={link} />
                                            <br/>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }}
                </Query>
            </div>
        )   
    
    }
}

export default LinkList;