import PropTypes from "prop-types";
import React, { useState } from 'react';
import '/src/shared/ui/TrendingFilms/TrendingFilms.scss';
import { Link } from 'react-router-dom';

export const TrendingFilms = ({ filmtr, onClick, isSelected }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const handleUnFavorite = () => {
        console.log('handleUnFavorite');
    };

    return (
        <div className={`filmstrend ${isSelected ? 'selected' : ''}`}>
            <div className="filmtr" onClick={() => { onClick(filmtr); toggleDetails(); }}>
                <div className="filmtr__image" style={{ backgroundImage: `url(${filmtr.image})` }}>
                    <div className="filmtr__icon-container">
                        <div className="filmtr__icon" >
                            <img src={filmtr.heartIcon} alt="icon" className='icon-trend'/>
                            {filmtr.isFavorited && <div onClick={handleUnFavorite}></div>}
                        </div>
                    </div>
                    <div className="filmtr__bottom">
                        <div className="filmtr__title">{filmtr.title}</div>
                        <div className="filmtr__info">
                            <div className="filmtr__year">{filmtr.year} |</div>
                            <div className="filmtr__genre">{filmtr.genre}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TrendingFilms.propTypes = {
    filmtr: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool
};
