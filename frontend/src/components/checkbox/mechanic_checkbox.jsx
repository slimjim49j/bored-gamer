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
        return(
            <div >
                <ul className="checkboxes">
                    {this.state.mechanics.map((mechanic, i) => (
                        <li key={`${i}`} className="checkbox-li">
                            <label className="checkbox-label">
                                <input className="checkbox-input" value={mechanic._id} type="checkbox" />
                                <span>{mechanic._id}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    };
};





export default MechanicCheckBox;
