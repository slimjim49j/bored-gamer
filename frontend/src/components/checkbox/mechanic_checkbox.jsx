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

                </ul>
            </div>
        )
    };
};





export default MechanicCheckBox;