import { Component } from "react";
import "./filmsList.css";

class FilmsList extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: [],
        };

        console.log(props);
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

    componentDidMount() {
        this.getFilms();
    }
    
    render() {
        return (
        <ul>
            {this.state.list.map((film) => {
                return <li key={film.id}>
                    <h2>{film.title}</h2>
                    <p>{film.release_date}</p>
                    <p>Critics: {film.rt_score}%</p>
                    <img src={film.image} alt={film.title + " banner"} />
                </li>;
            })}
        </ul>
        );
    }
}

export default FilmsList;