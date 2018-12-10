import React from 'react';
import { Panel } from 'react-bootstrap'
import API from '../../services/api'
import './TopLanguage.css'

class LanguageList extends React.Component {
    constructor() {
        super();
        this.state = { lang: '' }
    }

    async componentDidMount() {
        let api = new API();
        let lang = (await api.getLanguages())[0];
        let icon = lang.name.toLowerCase();
        icon = `devicon-${icon}-plain`;
        this.setState({ icon });
    }

    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title>Most Used Language</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <i id='top-lang-icon' className={this.state.icon} />
                </Panel.Body>
            </Panel>
        );
    }
}

export default LanguageList;