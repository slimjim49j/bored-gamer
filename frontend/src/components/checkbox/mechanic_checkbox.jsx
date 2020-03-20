import React from 'react';

class MechanicCheckBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mechanics: []
        };
    };

    componentDidMount() {
        this.props.mechanics()
            .then(mechanics => {this.setState({ mechanics: mechanics.data })})
    }
        
    render () {   
        console.log(this.state);

        return(
            <div>
                <ul>
                    {this.state.mechanics.map((mechanic, i) => (
                        <li key={`${i}`}>
                            <label>{mechanic._id}
                                <p>{mechanic.total}</p>
                                <input type="checkbox" />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    };
};





export default MechanicCheckBox;
