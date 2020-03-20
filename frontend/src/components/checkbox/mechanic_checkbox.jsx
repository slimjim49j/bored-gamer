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
                        <li key={`${i}`} className="checkbox-li">
                            <label className="checkbox-label">{mechanic._id}({mechanic.total})
                                {/* <p>{mechanic.total}</p> */}
                                <input className="checkbox-input" value={mechanic._id} type="checkbox" />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    };
};





export default MechanicCheckBox;
