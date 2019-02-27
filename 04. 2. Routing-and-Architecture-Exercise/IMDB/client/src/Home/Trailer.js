import React, { Fragment } from 'react';

const Trailer = (props) => {
    const { movie } = props;
    const trailerUrl = 'https://www.youtube.com/embed/' + movie.trailerUrl.substring(movie.trailerUrl.lastIndexOf('/') + 1);

    console.log('trailerUrl: ', trailerUrl)
    debugger;
    return (
        < Fragment >
            <div className="container-trailer">
                <h1>Trailor of {movie.title}</h1>
                <iframe width="420" height="315" title={movie.title}
                    src={trailerUrl}>
                </iframe>
            </div>
        </Fragment>
    )
}

export default Trailer;