import React from "react";
import debounce from "lodash.debounce";

import "../../assets/stylesheets/game_index.css";


class GameIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNum: 0,
            error: false, 
            hasMore: true, 
            isLoading: false, 
            games: []
        };

        window.onscroll = debounce(() => {
            const {
                loadUsers, 
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
                loadUsers();
            }
        }, 100);

        // this.viewGame = this.viewGame.bind(this);
    };

    componentDidMount() {
        this.loadUsers();
    };

    loadUsers = () => {
        this.props.incrementPageNum();
        this.setState({ isLoading: true }, () => {
            this.props.getGames(this.props.pageNum)
                .then((games) => {
                    this.setState({
                        games: [...this.state.games, ...games.data], 
                        isLoading: false
                    })
                })
                .catch((err) => {
                    this.setState({
                        error: err.message, 
                        isLoading: false
                    })
                });
        })
    }

    // viewGame(e) {
    //     this.props.history.push(`/games/${e.currentTarget._id}`)
    // }

    render() {
        const {
            games
        } = this.state;

        console.log(this.state);

        return (
            <div className="main-game-index-div">
                {games.map((game, i) => (
                    <li 
                        key={`${i}`}
                        className="games-li"
                        // onClick={this.viewGame}
                        >
                            <img src={game.imageUrl} className="game-image-index" alt="game-image"/>
                            <label>{game.title}</label>
 
                    </li>
                ))}
            </div>
        )
    }
};

export default GameIndex;