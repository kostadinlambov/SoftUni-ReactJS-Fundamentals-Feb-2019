import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

export default class Movie extends Component{
    constructor(props) {
        super(props)

        this.onClickHandlerTrailer = this.onClickHandlerTrailer.bind(this);
        this.onClickHandlerStoryLine = this.onClickHandlerStoryLine.bind(this);
    }

    onClickHandlerTrailer = () => {
        debugger;
        this.props.displayTrailer(this.props.trailerUrl);
    }

    onClickHandlerStoryLine = () => {
        debugger;
        this.props.displayStoryLine(this.props.storyLine, this.props.title);

    }

    render() {
        console.log('props: ', this.props)
        const { title, storyLine, trailerUrl, poster, displayTrailer, displayStoryLine, _id } = this.props;
        debugger;
        return (
            <li className="movie">
                <div className="title">{title}</div>
                <img src={poster} alt="Poster" />
                <NavLink className='button' to={`/home/trailer/${_id}`} >View Trailer</NavLink>
                <NavLink className='button' to={`/home/storyLine/${_id}`} >View Story Line</NavLink>
            </li>
        )
    }
}
