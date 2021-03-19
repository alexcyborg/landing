import React from "react";
import { Menu } from "semantic-ui-react";

class Header extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted size="huge">
                <Menu.Item
                    name='farmville'
                    active={activeItem === 'farmville'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item position="right"
                        name='campaigns'
                        active={activeItem === 'campaigns'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item position="right"
                        name='create +'
                        active={activeItem === 'create +'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
};

export default Header;