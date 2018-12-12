import React from 'react';
import moment from 'moment'
import { Panel, Media, Image } from 'react-bootstrap'
import API from '../../services/api'
import 'moment-precise-range-plugin'
import './UserOverview.css'
import { NavBar } from '../NavBar'
class LanguageList extends React.Component {
    constructor() {
        super();
        this.state = {
            avatar_url: '',
            accAge: '',
            nIssues: '',
            nPRs: '',
            nStars: ''
        }
    }

    async componentDidMount() {
        let api = new API();
        let info = await api.getUserInfo();
        let accAge = moment.preciseDiff(info.created_at, new Date());
        accAge = accAge.slice(0, accAge.indexOf('days') + 4);
        this.setState({ accAge, ...info });
    }

    render() {
        return (
			<div>
				<NavBar />
				<Panel className='user-info'>
					<Panel.Heading>User Overview</Panel.Heading>
					<Panel.Body>
						<Media>
							<Media.Left>
								<Image src={this.state.avatar_url} circle />
							</Media.Left>
							<Media.Body>
								<ul>
									<li>Account Age: <b>{this.state.accAge}</b></li>
									<li>Total Issues: <b>{this.state.nIssues}</b></li>
									<li>Total PRs: <b>{this.state.nPRs}</b></li>
									<li>Total Stars: <b>{this.state.nStars}</b></li>
								</ul>
							</Media.Body>
						</Media>
					</Panel.Body>
				</Panel>
			</div>
        );
    }
}

export default LanguageList;