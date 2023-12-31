import { useState } from "react";
import { userParams } from "react-router-dom";
import { useEffect } from "react";

function SingleFilmPage() {
  // You always declare state in the constructor of a class component.
  // This will work differently with functional components.
  const [item, setItem] = useState({});
  // destructuring in one line:
  // We only care about that one key on the object (id).
  const { id } = useParams();
}

function getFilm(){
    fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
        setItem(result);
    })
    .catch((err) => console.error(err));

    

  return (
    // ALT+SHFT+F for "Prettier"
    <div>
      <div>
        <img src={`${item.image}`} alt={`${item.title} Poster`} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
        <p>
          The film was released in <strong>{item.release_date}</strong> and
          garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
          <a
            href="https://www.rottentomatoes.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rotten Tomatoes
          </a>
          .
        </p>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default SingleFilmPage;
