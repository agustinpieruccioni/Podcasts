import React from 'react'
import './App.css'


class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      result : []
    };
  }

  componentDidMount() {
    fetch('https://api.audioboom.com/channels/recommended')
    .then((prom) => { 
      return prom.json()})
    .then(data => this.setState({result : data}))
  }


  renderPodcasts() {
    return this.state.result.map(podcasts => {
        return (
            <tr>
                <td>{podcasts.title}</td>
            </tr>
        );
    })
}


  render(){

    /*var listPost = prueba.forEach(function(podcasts){
      console.log(podcasts);
    });*/
    
    //this.state.result != 0 ? this.state.result.map((podcasts, i) => {return (<li key={i}>{podcasts.title}</li>) }): [];
    

    return(
    <div  className="navbar">
      <br/>
      <h4 id="title">Podcasts</h4>
      <br/>
      <div>
        <ul>
          {this.renderPodcasts()}
        </ul>
        </div>

    </div>
    )
  }

}
export default App
/**/ 
