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
                >= (document.documentElement.scrollHeight - 1000)
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

        this.props.getMoreGames(pageNum, categories, mechanics)
            .then(() => this.props.incrementPageNum());
    };

    handleClick(e) {
        const el = e.target.closest(".games-list");
        if (el && !this.props.isAuthenticated) {
            this.props.receiveDestination(el.dataset.destination);
        }
    }

    render() {
        const { games } = this.props;
        const gameCount = this.props.gameCount;

        return (
            <div className="main-game-index-div">
                <p className="game-count">Games Available: { gameCount }</p>
                <ul className="all-games" onClick={this.handleClick}>
                    {games.map((game, i) => (
                        <li
                            className="games-list"
                            key={`${i}`}
                            data-destination={`/games/${game._id}`} 
                            >
                            <Link
                                to={`/games/${game._id}`}
                                className="games-li"
                                >
                                    <img src={game.imageUrl} className="game-image-index" alt="boardgame"/>
                                    <label className="game-index-title">{game.title}</label>
        
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
};

export default GameIndex;