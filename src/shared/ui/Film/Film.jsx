import PropTypes from "prop-types";
import '/src/shared/ui/Film/Film.scss';
import React from 'react'
import { Link } from 'react-router-dom'
export const Film = ({ film }) => {
    const handleUnFavorite = () => {
        console.log('handleUnFavorite');
    }
    return (
        <Link to="/" className="film">
			<div className="film__image" style={{ backgroundImage: `url(${film.image})` }}>
				<div className="film__icon-container">
					<div className="film__icon icon-heart-1">
						{film.isFavorited && <div onClick={handleUnFavorite}></div> }
					</div>
				</div>
				<div className="film__bottom">
					<div className="film__title">{film.title}</div>
					<div className="film__info">
						<div className="film__year">{film.year} |</div>
						<div className="film__genre">{film.genre}</div>
					</div>
				</div>
			</div>
        </Link>
    );
};
Film.propTypes = {
    film: PropTypes.object,
};