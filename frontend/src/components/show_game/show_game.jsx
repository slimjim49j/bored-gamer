import React from 'react';
import '../../assets/stylesheets/game_show.css'
import { Link } from 'react-router-dom';
import Likes from "./likes";

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
      userLikes: [],
    }
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleReview = this.handleReview.bind(this);
  };

  componentDidMount() {
    this.props.getOneGame(this.props.match.params.gameId)
      .then(game => this.setState({ game: game.data, like: { ...this.state.like, gameId: game.data._id } }));
    this.props.receiveDestination(null);

    this.props.getGameLikes(this.props.match.params.gameId)
      .then(res => {
        const users = res.data;
        this.setState({ userLikes: users })
      });
  };

  handleLike(e) {
    e.preventDefault();
    const like = Object.assign({}, this.state.like);
    this.props.createLike(like)
      .then(like => (
        this.setState({
          like: {
            gameId: this.state.like.gameId,
            dislike: null,
            review: ''
          },
          userLikes: this.state.userLikes.concat({
            username: this.props.currentUser.username,
            likes: [like.data]
          })
        })
      ));
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
          <Likes userLikes={this.state.userLikes} />
        </div>
      )
    }

  };
};
export default ShowGame;