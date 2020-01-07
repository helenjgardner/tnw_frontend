import React from 'react';

class Favourite extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.favUrl} target="_blank"> {this.props.favUrl} </a>
            </div>
        );
    }
}


export default Favourite;