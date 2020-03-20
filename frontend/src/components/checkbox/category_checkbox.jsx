import React from 'react';

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
    }
        
    render () {   
        console.log(this.state);

        return(
            <div>
                <ul>
                    {this.state.categories.map((category, i) => (
                        <li key={`${i}`}>
                            <label>{category._id}
                                <p>{category.total}</p>
                                <input type="checkbox"/>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    };
};


export default CategoryCheckBox;
