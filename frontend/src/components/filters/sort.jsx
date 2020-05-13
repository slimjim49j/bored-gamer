import React, { Component } from 'react';
import "../../assets/stylesheets/order.css";

export default props => {
    return (
        <div className="sort-container">
            <h3>Sort By:</h3>
            
            <select
                id=""
                className="sort-dropdown"
                onChange={props.handleFilterChange}
                defaultValue="_id"
            >
                <option value="_id">None</option>
                <option value="avgTime">Avg. Play Time</option>
                <option value="year">Release Date</option>
                <option value="title">Title</option>
                <option value="avgRating">Rating</option>
            </select>

            <label>
                <input type="checkbox" className="order-checkbox" />
                <span className=""></span>
            </label>
        </div>
    )
};