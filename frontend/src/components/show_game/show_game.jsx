import React from 'react';
import '../../assets/stylesheets/game_show.css'
import { Link } from 'react-router-dom';

class ShowGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likability: "",
      notes: "",
      game: {},
      like: {
        gameId: null,
        dislike: null,
        review: ''
      }, 
      gameLikes: {}
    }
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleReview = this.handleReview.bind(this);
  };

  componentDidMount() {
    const game = this.props.getOneGame(this.props.match.params.gameId)
      .then(game => this.setState({ game: game.data, like: { ...this.state.like, gameId: game.data._id } }));
    this.props.receiveDestination(null);

    const gameLikes = this.props.getGameLikes(this.props.match.params.gameId)
      .then(games => this.setState({ likedGames: games.data[0] }))
  };

  handleLike(e) {
    e.preventDefault();
    const like = Object.assign({}, this.state.like);
    this.props.createLike(like);
    this.setState({
      like: {
        gameId: this.state.like.gameId,
        dislike: null,
        review: ''
      }
    });
  };

  handleDislike(e) {
    this.setState({
      like: { ...this.state.like, dislike: e.target.value === 'dislike' }
    });
  };

  handleReview(e) {
    e.preventDefault();
    this.setState({
      like: { ...this.state.like, review: e.target.value }
    });
  };

  render() {
    const game = this.state.game;
    const reviews = this.state.likedGames ? this.state.likedGames : null
    // if (reviews) console.log(reviews.likes);
  
    if (!Array.isArray(game.categories) || !reviews) {
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

                <form className="game-form" onSubmit={this.handleLike}>
                  <p>Did you and your friends enjoy the game?</p>
                  <div >
                    <label> <span role="img" aria-label="like">👍🏼</span>
                      <input type="radio" name="likability" value="like" onChange={this.handleDislike} checked={ !this.state.like.dislike && this.state.like.dislike !== null }/>
                    </label>
                    <label> <span role="img" aria-label="like">👎🏼</span>
                      <input type="radio" name="likability" value="dislike" onChange={this.handleDislike} checked={this.state.like.dislike && this.state.like.dislike !== null}/>
                    </label>
                  </div>
                  <label>
                    <textarea
                      name="game_notes"
                      placeholder="additional notes"
                      cols="50"
                      rows="5"
                      onChange={this.handleReview}
                      value={this.state.like.review}
                      >
                    </textarea>
                  </label>
                  <input className="save-game-btn" type="submit" value="save"/>
                </form>
                
              </div>
            </div>
            <Link className="prev-page" to="/">Play a different game</Link>
          </div>
          <div>
            {reviews.likes.map((review) => 
              console.log(review)
            )}
          </div>
        </div>
      )
    }

  };
};
export default ShowGame;