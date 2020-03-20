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
                            <p>{category._id}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    };
};


export default CategoryCheckBox;
