import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";
export const Favorites = () => {
    const listItems = films.map((film) => <Film key={film.id} film={film} />);

    return (
        <>
        <div className="favourites-container">
            <Header />
                <div className="favorites">
                    <div className="favorites__title">Favourites</div>
                    <div className="favorites-list">
                        {listItems}
                    </div>
                </div>
        </div>
        </>
    );
};