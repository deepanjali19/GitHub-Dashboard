import React from 'react';
import moment from 'moment'
import { Panel, Media, Image } from 'react-bootstrap'
import API from '../../services/api'
import 'moment-precise-range-plugin'
import './UserSummary.css'

class UserSummary extends React.Component {
  
    constructor() {
        super();
        this.state = {
            avatar_url: '',
            login: '',
        }
    }
    
    async componentDidMount() {
        let api = new API();
        let info = await api.getUserSummary();
        this.setState({ ...info });
    }
    
    render() {
        return (
            <div className="user-summary">
                  <span className="login-text">{this.state.login}</span>
                  <Image className="icon" src={this.state.avatar_url} circle />
            </div>
        );
    }

}


export default UserSummary;