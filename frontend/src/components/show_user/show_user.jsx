import React from 'react';
import '../../assets/stylesheets/user_show.css'

const ShowUser = (props) => (

      <div className="main-user-show-div">
        <div className="user-show-background"></div>

        <div className="user-contents">
          <div className="user-profile-message">
            <p className="user-username">Hello {props.user.username}</p>

            {/* <div className="game-boolean-options">
              <button>Liked</button>
              <button>Disliked</button>
            </div> */}
            
          </div>

          <div className="user-games">
            <div className="user-liked-games">
              <p className="like-title">Liked Games</p>
              <div>A liked game w title and photo </div>
              <div>A liked game </div>
              <div>A liked game </div>
              <div>A liked game </div>
              <div>A liked game </div>
            </div>
            <div className="user-disliked-games">
              <p className="like-title">Disliked Games</p>
              <div>A disliked game w title and photo</div>
              <div>A disliked game</div>
              <div>A disliked game</div>
            </div>  
          </div>
        </div>
      </div>
)


export default ShowUser;