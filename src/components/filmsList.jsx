import { Component } from "react";

class FilmsList extends Component{
    constructor(){
        super();

        this.state = {
            list: []
        }
    }

    getFilms(){
        fetch(`https://studioghibliapi-d6fc8.web.app/films`)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            this.setState({
                list: result
            });
        })
        .catch((err) => {
            console.error(err);
        })
    }

    componentDidMount(){
        this.getFilms();
    }
    
    render() {
        return <ul>
            {this.state.list.map((item) => {
                return <li key={item.id}>{item.title}</li>
            })}
        </ul>
}
}

export default FilmsList;