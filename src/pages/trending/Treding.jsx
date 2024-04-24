import React, { useState } from 'react';
import { Header } from "../../shared/ui/Header/Header";
import { films2 } from "../../database/films2";
import { TrendingFilms } from "../../shared/ui/TrendingFilms/TrendingFilms";
import { StarIcon } from '../../shared/icons/StarIcon';
import '/src/assets/icons/heart.svg'

export const Trending = () => {
    const [selectedFilm, setSelectedFilm] = useState(null);

    const handleFilmClick = (film) => {
        setSelectedFilm(film);
    };

    const handleDetailsClose = () => {
        setSelectedFilm(null);
    };

    return (
        <>
			<Header />
            	<div className="trending">
                	<div className="trending__title">Trending at this moment</div>
                	<div className="trending-list" >
                    	{films2.map((filmtr) => (
                        	<TrendingFilms
                            	key={filmtr.id}
                            	filmtr={filmtr}
                            	onClick={handleFilmClick}
                            	isSelected={selectedFilm && selectedFilm.id === filmtr.id}
                        	/>
                    	))}
                	</div>
            	</div>
            	{selectedFilm && (
                	<div className="film-details" onClick={handleDetailsClose}>
						<div className="film-details__main">
							<div className="film-details__container">
								<div className="film-details__img">
									<img src={selectedFilm.bigImage} alt={selectedFilm.title} className='film-details__image'/>
								</div>
								<div className="film-details__info">
									<div className="film-details__main-info">
										<div className="film-details__title">{selectedFilm.title}</div>
										<div className="film-details__mark">
											<StarIcon />
											<div className="film-details__mark-number">{selectedFilm.mark}</div>
										</div>
									</div>
									<div className="film-details__main-desc">
										<div className="film-details__year">{selectedFilm.year}</div>
										<div className="film-details__genre">{selectedFilm.genre}</div>
										<div className="film-details__time">{selectedFilm.time}</div>
									</div>
									<div className="film-details__description">{selectedFilm.description}</div>
									<div className="film-details__bottom">
										<button className="film-details__button">Watch now</button>
										<div className="film-details__icon ">
											<img src="/src/assets/icons/heart.svg" alt="Heart" />
										</div>
									</div>
								</div>
							</div>
						</div>
                	</div>
            )}
        </>
    );
};



