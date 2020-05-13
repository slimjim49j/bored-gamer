import React, { Component } from 'react';
import "../../assets/stylesheets/order.css";

export default props => {
    return (
        <div>
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

            <p>Ascending</p>
            <label className="switch">
                <input type="checkbox" className="order-checkbox" />
                <span className="slider"></span>
            </label>
        </div>
    )
};