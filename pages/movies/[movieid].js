import Link from "next/link";
import React from "react";

const Movie = ({ data }) => {
  return (
    <>
      <h1>El ID de la pelicula es {data?.id}</h1>
      <h1>La pelicula se llama: {data?.title}</h1>
      <h1>Dura {data?.length} minutos</h1>
      <h1>Y tiene una puntuacion de {data?.rating}</h1>
      <Link href="/movies">
        <a>Volver</a>
      </Link>
    </>
  );
};

//SERVER SIDE

//Manera para renderizar paginas que requieren data dinamica
/* export async function getServerSideProps(context) {
  const { movieid } = context.params;
  return {
    props: { movieid }, // will be passed to the page component as props
  };
} */

//Manera para renderizar paginas que requieren data estatica (Se usa getStaticProps en conjunto con getStaticPaths)

//{ params: { ... } }
export async function getStaticPaths() {
  const { data } = await (
    await fetch("http://localhost:3001/api/movies")
  ).json();

  return {
    paths: data.map((movie) => {
      return { params: { movieid: toString(movie.id) } };
    }),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { data } = await (
    await fetch(`http://localhost:3001/api/movies/${context.params.movieid}`)
  ).json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Movie;
