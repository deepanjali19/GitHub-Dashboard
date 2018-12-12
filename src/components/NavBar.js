import React from 'react'
export const NavBar = () => (
		<nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <span id="dashboard">GitHub-Dashboard</span>
                            </a>
                            <a href="#" className="navbar-left"><img src={"https://i.imgur.com/wLD7J0n.png"} height="70" alt="GitHub Logo" /></a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/Home">Home</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Features
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/IssueLabel">IssueLabel</Link></li>
                                    <li><Link to="/LanguageList">LanguageList</Link></li>
                                    <li><Link to="/PieChart">PieChart</Link></li>
                                    <li><Link to="/RepoRecentActivity">RepoRecentActivity</Link></li>
                                    <li><Link to="/UserRecentActivities">UserRecentActivities</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
        </nav>
)
