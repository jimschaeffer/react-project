import { Component } from 'react';
import FilmsList from "./components/filmsList";
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(ev){
    this.setState({
      text: ev.target.value
    });
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul className="item-list">
         {this.state.list.map((item, index) => {
            return <li key={item + index}>{item}</li>
         })}
        </ul>
        <FilmsList />
      </div>
    );
  }
}

export default App;