import React from 'react';
import '../../assets/stylesheets/game_show.css'
import { Link } from 'react-router-dom';

class ShowGame extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      likability:"",
      notes:"",
      game:{}
    }
  };

  componentDidMount() {
    const game = this.props.getOneGame(this.props.match.params.gameId)
                  .then(game => this.setState({game: game.data}))
    
  };

  render() {
    const game = this.state.game;

    if (!Array.isArray(game.categories)) {
      return null
    } else {
      return(
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

                <form className="game-form">
                  <p>Did you and your friends enjoy the game?</p>
                  <div>
                    <label> <span role="img" aria-label="like">👍🏼</span>
                      <input type="radio" name="likability" value="like"/>
                    </label>

                  <label> <span role="img" aria-label="like">👎🏼</span>
                      <input type="radio" name="likability" value="dislike"/>
                    </label>
                  </div>

                  <label>
                      <textarea 
                        name="game_notes"
                        placeholder="additional notes" 
                        cols="50" 
                        rows="5"></textarea>
                  </label>

                  <input className="save-game-btn" type="submit" value="save"/>
                  {/* submit button currently doesn't have any functionality. Will need to update later */}
                </form>
              </div>
            </div>
                <Link className="prev-page" to="/">Play a different game</Link>
          </div>
        </div>
      )
    }
  };
};

export default ShowGame;