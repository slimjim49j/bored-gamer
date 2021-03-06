import React from "react";
import debounce from "lodash.debounce";
import { Link } from 'react-router-dom'
import "../../assets/stylesheets/game_index.css";
import '../../assets/stylesheets/main_page.css';


class GameIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false, 
            hasMore: true, 
            isLoading: false, 
            games: []
        };

        window.onscroll = debounce(() => {
            const {
                loadGames, 
                state: {
                    error, 
                    isLoading, 
                    hasMore,
                },
            } = this; 
            
            if (error || isLoading || !hasMore) return;

            if (
                (window.innerHeight + document.documentElement.scrollTop)
                >= (document.documentElement.scrollHeight - 500)
            ) {
                loadGames();
            }
        }, 100);
            
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount() {
        this.props.resetPageNum();
        this.props.getInitialGames(1)
            .then(() => this.props.incrementPageNum());
    };

    componentWillUnmount() {
        window.onscroll = undefined;
    }

    loadGames = () => {
        const categories =
            Array.from(document
                .querySelectorAll(".categories-div input[type=checkbox]:checked"))
                .map(el => el.value);
        const mechanics =
            Array.from(document
                .querySelectorAll(".mechanics-div input[type=checkbox]:checked"))
                .map(el => el.value);
        
        const pageNum = this.props.pageNum;

        const sortDropdown = document.querySelector(".sort-dropdown :checked");
        // line below prevents weird error when navigate to seperate page and scrolled far enough down
        if (!sortDropdown) return;

        const sort = sortDropdown.value;
        const order = document.querySelector(".order-checkbox").checked ? -1 : 1;

        this.props.getMoreGames({pageNum, categories, mechanics, sort, order})
            .then(() => this.props.incrementPageNum());
    };

    handleClick(e) {
        const el = e.target.closest(".games-list");
        if (el && !this.props.isAuthenticated) {
            this.props.receiveDestination(el.dataset.destination);
        }
    }

    render() {
        const { games, gameCount } = this.props;
        const gameOrder = document.querySelector(".sort-dropdown :checked");
        const selectedProperty = (
            gameOrder && 
            gameOrder.value !== "_id" &&
            gameOrder.value !== "title") ? gameOrder.value : null;
        // debugger
        return (
            <div className="main-game-index-div">
                <p className="game-count">Games Available: { gameCount }</p>
                <ul className="all-games" onClick={this.handleClick}>
                    {games.map((game) => (
                        <li
                            className="games-list"
                            key={`${game._id}`}
                            data-destination={`/games/${game._id}`} 
                            >
                            <Link
                                to={`/games/${game._id}`}
                                className="games-li"
                                >
                                    <img src={game.imageUrl} className="game-image-index" alt="boardgame"/>
                                    <label className="game-index-title">{game.title}</label>
                                    <p>{selectedProperty && `${gameOrder.text}: ${game[selectedProperty]}`}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
};

export default GameIndex;