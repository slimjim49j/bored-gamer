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
    };

    componentDidMount() {
        this.loadUsers();
    };

    loadUsers = () => {
        this.setState({ isLoading: true, pageNum: this.state.pageNum + 1 }, () => {
            this.props.getGames(this.state.pageNum)
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

    render() {
        const {
            games
        } = this.state;

        console.log(this.state);

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                {games.map((game, i) => (
                    <li key={`${i}`}>
                        <label className='TESTER_LABEL_DELETE_THIS' >{game.title}
                        </label>
                    </li>
                ))}
            </div>
        )
    }
};

export default GameIndex;