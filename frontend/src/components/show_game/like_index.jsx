import React from 'react'
import LikeItemContainer from './like_item_container';

class LikeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllLikes(this.props.match.params.gameId);
  }
  
  render() {
    return (
      <ul className="likes-container">
        {Object.values(this.props.likes).map(like => (
          <LikeItemContainer like={like} key={like._id} />
        ))}
      </ul>
    )
  }
}

export default LikeIndex;