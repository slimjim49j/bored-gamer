import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/user_show.css'

class ShowUserLike extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: {}
    }
  }

  componentDidMount() {
    this.props.getUserGames(this.props.user.id, this.props.dislikeBool)
                        .then(games => this.setState({games: games.data}))     
  }

  render () {
    const games = Object.values(this.state.games)
    if (!games) return null;
    console.log(games);
    
    const { user } = this.props;

    const like = this.props.dislikeBool ? (
      "Disliked Game"
    ) : (
      "Liked Game"
    )
    
    return (
      <div className="main-user-show-div">
        <div className="user-show-background"></div>

        <div className="user-contents">
          <div className="user-profile-text">
            <p className="user-username">Hello {this.props.user.username}</p>

            <div className="user-link-options">
              <Link to={`/users/${user.id}/like`}>Liked</Link>
              <Link to={`/users/${user.id}/dislike`}>Disliked</Link>
              <Link to="/">Play More</Link>
            </div>
            
          </div>

          <div className="user-games">
              <p className="like-title">{like} Reviews</p>
              <ul className="user-games-ul">
                {games.map((game, i) => 
                  <li key={`${game.id}, ${i}`} className="user-games-li">
                    <Link 
                      to={`/games/${game.game._id}`} 
                      className="user-game-link">
                      {game.game.title}
                    </Link>
                    <img src={game.game.imageUrl} alt="boardgame" className="user-game-image"/>
                    <p className="user-game-review">{game.review}</p>
                  </li>
                )}
              </ul>
          </div>
        </div>
      </div>
    )
  };
};


export default ShowUserLike;