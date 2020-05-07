import React from 'react';
import '../../assets/stylesheets/checkbox.css';

class CategoryCheckBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        };
    };

    componentDidMount() {
        this.props.categories()
            .then(categories => {this.setState({ categories: categories.data })})
    };
        
    render () {   
        return(
            <div>
                <ul>
                    {this.state.categories.map((category, i) => (
                        <li key={`${i}`} className="checkbox-li">
                            <label className="checkbox-label">
                                <input className="checkbox-input" value={category._id} type="checkbox"/>
                                <span>{`${category._id} (${category.total}`})</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    };
};


export default CategoryCheckBox;
