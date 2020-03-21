import React from 'react';
import '../../assets/stylesheets/game_show.css'

class ShowGame extends React.Component {

  render() {

    return(
      <div className="main-game-show-div">
        <p className="game-title">HELLO THIS IS A SINGLE GAME TITLE</p>
          <div className="game-image">
            <p>game image will be here</p>
          </div>

          <div className="game-description">
            <p>game description will be here</p>
            <br/>
            <label>avg rating:</label>
            <br/>
            <label>categories:</label>
            <label>mechanics:</label>
            <br/>
            <label>min players:</label>
            <label>max players:</label>
            <label>avg play time:</label>

          </div>

          <form className="game-form">
            <p>Did you and your friends enjoy the game?</p>
            <div>
              <label> <span role="img" aria-label="like">👍🏼</span>
                <input type="radio" name="select" value="like"/>
              </label>

            <label> <span role="img" aria-label="like">👎🏼</span>
                <input type="radio" name="select" value="dislike"/>
              </label>
            </div>

           <label>
              <textarea name="game_notes" cols="50" rows="10"></textarea>
           </label>

           <input type="submit" value="save game"/>

          </form>
      </div>
    )
  }
}

export default ShowGame;