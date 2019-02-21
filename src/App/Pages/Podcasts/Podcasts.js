import React from 'react'

class Podcasts extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        result: [],
    };
  }

  componentDidMount() {
    fetch('https://api.audioboom.com/channels/recommended')
      .then(response => response.json())
      .then(json => this.setState({ result : json }));
  }

  render(){
      return (
      <div>
        {this.state.result.map((podcasts) => {
            return(
            <p key={podcasts.id}> {podcasts.title}</p>
            );
        })
        }
      </div> 
      );
  }
}

module.exports = Podcasts