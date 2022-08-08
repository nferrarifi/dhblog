import React from "react";
import Link from "next/link";

const Movies = (props) => {
  return (
    <>
      {props.movies.data.map((movie) => (
        <Link href={`movies/${movie.id}`}>
          <a>
            <h1 key={movie.id}>{movie.title}</h1>
          </a>
        </Link>
      ))}
    </>
  );
};

//-------------//
//ESTAS FUNCIONES NO LE PUEDEN PEGAR A API ENDPOINTS CREADAS EN LA APP DE NEXTJS. PEGALE DIRECTO AL SERVIDOR

export async function getStaticProps(context) {
  const movies = await (await fetch("http://localhost:3001/api/movies")).json();
  return {
    props: { movies }, // will be passed to the page component as props
  };
}

export default Movies;
