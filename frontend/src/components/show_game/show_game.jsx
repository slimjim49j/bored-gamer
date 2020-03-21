import React from 'react';
import '../../assets/stylesheets/game_show.css'

class ShowGame extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      likability:"",
      notes:""
    }
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const game = Object.assign({}, this.state);
  //   this.props.saveGame(game)
  //   this.setState({
  //     likability: "",
  //     notes: ""
  //   })
  // }

  // update(field) {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   })
  // }

  render() {

    return(
      <div className="main-game-show-div">
        <div className="game-show-background"></div>

        <div className="game-contents">
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
    )
  }
}

export default ShowGame;