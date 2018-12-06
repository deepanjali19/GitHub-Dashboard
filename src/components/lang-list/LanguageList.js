import React from 'react';
import { Button, Badge, Panel } from 'react-bootstrap'
import API from '../../services/api'
import './LanguageList.css'
import PieChart from '../pie-chart/PieChart';

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
            <div>
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
                <PieChart langs={this.state.langs}/>
            </div>
        );
    }
}

export default LanguageList;