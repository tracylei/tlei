import React from 'react';
import { elastic as Menu } from 'react-burger-menu'

class App extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    getMenu(){
        var menuStateChange = function(state) {
            // Remove static sidebar when menu is open
            // Add it back when menu is closed
            return state.isOpen;
        };

        return (
            <Menu 
                pageWrapId={"page-wrap"} 
                outerContainerId={"outer-container"}
                onStateChange={menuStateChange}
                customBurgerIcon={ <img src="img/burger.svg" /> }>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }

    render() {
        return (
            <div id="outer-container" style={{height: '100%'}}>
                {this.getMenu()}
                <main id="page-wrap">
                    <h1> "Hello" </h1>
                </main>
            </div>
        );
    }
}

export default App;
