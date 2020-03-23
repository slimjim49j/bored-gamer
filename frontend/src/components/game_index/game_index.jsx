import React from "react";
import debounce from "lodash.debounce";
import { Link } from 'react-router-dom'
import "../../assets/stylesheets/game_index.css";
import '../../assets/stylesheets/css_reset.css'


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
            // debugger
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
                window.innerHeight + document.documentElement.scrollTop
                >= document.documentElement.offsetHeight
            ) {
                loadGames();
            }
        }, 100);

    };

    componentDidMount() {
        // debugger
        this.props.resetPageNum();
        this.props.getInitialGames();
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
        
        // debugger
        // this.setState({ isLoading: true }, () => {
        //     this.props.getGames(this.props.pageNum)
        //     .then((games) => {
        //         this.setState({
        //             games: [...this.state.games, ...games.data], 
        //             isLoading: false
        //         })
        //         this.props.incrementPageNum();
        //     })
        //     .catch((err) => {
        //         this.setState({
        //             error: err.message, 
        //             isLoading: false
        //         })
        //     });
        // })
    }

    render() {
        const { games } = this.props;
        console.log(games)
        return (
            <div className="main-game-index-div">
                {games.map((game, i) => (
                    <ul className="games-list" key={`${i}`}>
                        <Link to={`/games/${game._id}`}
                            className="games-li"
                            >
                                <img src={game.imageUrl} className="game-image-index" alt="boardgame"/>
                                <label className="game-index-title">{game.title}</label>
    
                        </Link>
                    </ul>
                ))}
            </div>
        )
    }
};

export default GameIndex;