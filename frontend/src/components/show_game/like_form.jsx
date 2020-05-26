import React, { Component } from 'react';

class LikeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dislike: null,
            review: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.handleReview = this.handleReview.bind(this);
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
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.gameId) {
            const like = {
                gameId: this.props.gameId,
                review: this.state.review,
                dislike: this.state.dislike,
            };
            this.props.createLike(like)
                .then(() => this.setState({dislike: null, review: ""}));
        }
    };
    
    render() {
        return (
            <form className="game-form" onSubmit={this.handleSubmit}>
                <p>Did you and your friends enjoy the game?</p>
                <div >
                    <label> <span role="img" aria-label="like">👍🏼</span>
                        <input type="radio" name="likability" value="like" onChange={this.handleDislike} checked={!this.state.dislike && this.state.dislike !== null} />
                    </label>
                    <label> <span role="img" aria-label="like">👎🏼</span>
                        <input type="radio" name="likability" value="dislike" onChange={this.handleDislike} checked={this.state.dislike && this.state.dislike !== null} />
                    </label>
                </div>
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
                <input className="save-game-btn" type="submit" value="save" />
            </form>
        )
    }
}

export default LikeForm;