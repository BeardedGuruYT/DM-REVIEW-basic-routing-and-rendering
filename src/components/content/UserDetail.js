import React, {Component} from 'react';
import axios from 'axios';


class UserDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeUser: null
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`/api/user/${id}`)
        .then(res => {
            console.log('res')
        })
    }

    render() {
        return (
            <main className="user-detail-wrap">
                <div className="back-button"
                    onClick={this.props.clearUser}>X</div>
                <div className="detail-pic-wrap">
                    <img src={this.props.pic} className="detail-pic" alt="profile" />
                </div>
                <h2>{this.state.activeUser}</h2>
                <h2>{this.props.name}</h2>
                <h3>{this.props.email}</h3>
                <h3>{this.props.cell}</h3><br />
                <h4>{this.props.location.street}<br />
                    {this.props.location.city}, {this.props.location.state} {this.props.location.postcode}
                </h4>
            </main>
        )
    }
}

export default UserDetail;