import React from 'react';
import { Button, Badge, Panel } from 'react-bootstrap'
import API from '../../services/api'
import './LanguageList.css'

class LanguageList extends React.Component {
    constructor() {
        super();
        this.state = { langs: [] }
    }

    async componentDidMount() {
        let api = new API();
        let langs = await api.getLanguages();
        this.setState({ langs });
    }

    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title>Languages Used</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {this.state.langs.map(e =>
                        <span key={e.name}>
                            <Button>{e.name} <Badge>{e.count}</Badge></Button>{' '}
                        </span>
                    )}
                </Panel.Body>
            </Panel>
        );
    }
}

export default LanguageList;