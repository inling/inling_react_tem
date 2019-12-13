import React from 'react';
import './iHeader.scss';
import { Layout } from 'antd';
import NavbarMenu from '../../components/navbarMenu/navbarMenu';
import NavbarList from '../../components/navbarList/navbarList';
import SmallScreenNavbar from '../../components/smallScreenNavbar/smallScreenNavbar';

const { Header } = Layout;
const smallScreen = window.matchMedia('(max-width:778px)');

class iHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smallScreen: false
        }
        this.mediaQueryString = this.mediaQueryString.bind(this);
    }
    componentDidMount() {
        this.mediaQueryString()
        smallScreen.addListener(this.mediaQueryString)

    }

    componentWillUnmount() {
        smallScreen.removeListener(this.mediaQueryString)
    }

    mediaQueryString() {
        this.setState({
            smallScreen: smallScreen.matches ? true : false
        })
    }

    render() {
        return (
            <Header {...this.props} className="header">
                {
                    this.state.smallScreen ? (
                        <SmallScreenNavbar />
                    ) : (
                        <div className = "largeScreenNavbar">
                            <NavbarList />
                            <NavbarMenu />
                        </div>
                    )
                }
            </Header>
        )
    }
}

export default iHeader;
