import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjognjrxw06cv01fuou0lt1ss/master'
});

const POST_QUERY = gql`
{
  clientupdateses {
    title
    recentupdates
    screenshot {
      url
    }
    createdAt
  }
  }
`


// client.query({
//   query: testQuery
// }).then(res => console.log(res))

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>

      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Query query={POST_QUERY}>
            {({loading, data}) => {
              if(loading) return "Loading..."
              const { clientupdateses } = data
              return clientupdateses.map(clientupdateses => 
                <div>
              <h1>{clientupdateses.title}</h1>
              <h1>{clientupdateses.recentupdates}</h1>
              <div>{clientupdateses.createdAt}</div>
              <img src={clientupdateses.screenshot.url} alt='some value'/>
              </div>
              
                )
            }}
          </Query>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;