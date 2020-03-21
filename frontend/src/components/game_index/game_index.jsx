import React from "react";
import { render } from "react-dom";
import request from "superagent";
import debounce from "lodash.debounce";

class GameIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false, 
            hasMore: true, 
            isLoading: false, 
            games: []
        };

        window.onscroll = debounce(() => {
            const {
                loadUsers, 
                state: {
                    error, 
                    isLoading, 
                    hasMore,
                },
            } = this; 

            if (error || isLoading || !hasMore) return;

            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                loadUsers();
            }
        }, 100);
    };

    componentDidMount() {
        this.loadUsers();
    };

    loadUsers = () => {
        this.setState({ isLoading: true }, () => {
            request
                .get('')
        })
    };
};