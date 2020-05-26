import React from 'react';
import '../../assets/stylesheets/game_show.css'
import { Link } from 'react-router-dom';
import LikeFormContainer from './like_form_container';
import LikeIndexContainer from './like_index_container';

class ShowGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likability: "",
      notes: "",
      game: {},
    }
  };

  componentDidMount() {
    this.props.getOneGame(this.props.match.params.gameId)
      .then(game => this.setState({ game: game.data, like: { ...this.state.like, gameId: game.data._id } }));
    this.props.receiveDestination(null);
  };

  render() {
    const game = this.state.game;
  
    if (!Array.isArray(game.categories)) {
      return null
    } else {
      return (
        <div className="main-game-show-div">
          <div className="game-show-background"></div>
          <div className="game-container">
            <p className="game-title">{game.title}</p>
            <div className="game-contents">

              <div className="game-display-left">
                <div className="game-image-container">
                  <img className="game-image" src={game.imageUrl} alt="" />
                </div>
              </div>

              <div className="game-display-right">
                <div className="game-description">
                  <label>Avg rating: <p>{Math.floor(game.avgRating)}/10</p></label>
                  <label>Categories: <p>{game.categories.join(', ')}</p></label>
                  <label>Mechanics: <p>{game.mechanics.join(', ')}</p></label>
                  <label>Min players: <p>{game.minPlayers}</p></label>
                  <label>Max players: <p>{game.maxPlayers}</p></label>
                  <label>Avg play time: <p>{game.avgTime}min</p></label>
                </div>

                <LikeFormContainer gameId={game._id} />
                
              </div>
            </div>
            <Link className="prev-page" to="/">Play a different game</Link>
          </div>
          <LikeIndexContainer />
        </div>
      )
    }

  };
};
export default ShowGame;