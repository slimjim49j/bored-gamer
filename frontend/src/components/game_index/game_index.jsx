import React from "react";
import { render } from "react-dom";
// import request from "superagent";
import debounce from "lodash.debounce";


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
                === document.documentElement.offsetHeight
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
                        games, 
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
            error, 
            hasMore, 
            isLoading, 
            games
        } = this.state;

        return (
            <div>
                {games.map((game, i) => (
                    <li key={`${i}`}>
                        <label>{games.title}
                            {console.log(game)}
                        </label>
                    </li>
                ))}
            </div>
        )
    }
};

export default GameIndex;