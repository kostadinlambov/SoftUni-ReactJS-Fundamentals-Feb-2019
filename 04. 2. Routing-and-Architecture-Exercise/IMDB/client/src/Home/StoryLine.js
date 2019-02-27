import React, { Fragment } from 'react';

const StoryLine = (props) => {
    console.log('StoryLine props: ', props)
    const { movie } = props;
    debugger;
    return (
        < Fragment >
            <div className="container-story">
                <h1>Story line of {movie.title}</h1>
                <div className="story-line">{movie.storyLine}</div>
            </div>
        </Fragment>
    )
}

export default StoryLine;