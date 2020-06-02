import React from 'react'

class LikeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            review: props.like.review,
            dislike: props.like.dislike,
        };

        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.handleReview = this.handleReview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggleEdit() {
        this.setState({ edit: !this.state.edit });
    }

    handleDislike(e) {
        this.setState({
            dislike: e.target.value === 'dislike',
        });
    };

    handleReview(e) {
        this.setState({
            review: e.target.value,
        });
    };

    handleCancel() {
        this.toggleEdit();
        const { review, dislike } = this.props.like;
        this.setState({review, dislike})
    }

    handleSubmit(e) {
        e.preventDefault();
        const like = {
            _id: this.props.like._id,
            gameId: this.props.like.gameId,
            review: this.state.review,
            dislike: this.state.dislike,
        };
        this.props.updateLike(like)
            .then(() => this.toggleEdit());
    };

    handleDelete() {
        this.props.destroyLike(this.props.like._id);
    }

    render () {
        const { like, key } = this.props;
        const reviewText = this.state.edit ? (
            <div>
                <label>
                    <textarea
                        name="game_notes"
                        placeholder="additional notes"
                        cols="50"
                        rows="5"
                        onChange={this.handleReview}
                        value={this.state.review}
                    >
                    </textarea>
                </label>
                <div className="like-control-btn-wrapper">
                    <button className="like-control-btn" onClick={this.handleCancel}>Cancel</button>
                    <button className="like-control-btn save-btn" onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
        ) : (
            <p>{like.review}</p>
        );

        const thumb = this.state.edit ?  (
            <div className="thumb-edit">
                <label> <span role="img" aria-label="like">👍🏼</span>
                    <input type="radio" name="likability" value="like" onChange={this.handleDislike} checked={!this.state.dislike} />
                </label>
                <label> <span role="img" aria-label="like">👎🏼</span>
                    <input type="radio" name="likability" value="dislike" onChange={this.handleDislike} checked={this.state.dislike} />
                </label>
            </div>
        ) : (
            <p className="thumb">{like.dislike ? "👎🏼" : "👍🏼"}</p>
        );

        return (
            <li key={key}>
            <div className="like-top">            
            { thumb }
            <div className="like-content">
                <div className="like-header">
                    <h3>{like.username}</h3>
                    <span>{like.date ? like.date.slice(0, 10) : null}</span>
                </div>

                { reviewText }
                
            </div>
            </div>
            <div>
                {
                    (this.props.currentUserId === like.userId) && !this.state.edit ? (
                        <div className="like-control-btn-wrapper">
                            <button className="like-control-btn" onClick={this.toggleEdit}>Edit</button>
                            <button className="like-control-btn" onClick={this.handleDelete}>Delete</button>
                        </div>
                    ) : <div className="spacer-div"></div>
                }
            </div>
            </li>
        )
    }
}

export default LikeItem;