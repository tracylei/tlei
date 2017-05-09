import React from 'react';
import { elastic as Menu } from 'react-burger-menu'

class App extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    getMenu() {
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

    getMainBlurb() {
        return (
            <p id="main-blurb"> 
            I am currently a 4th year Computer Science student at the University of Waterloo. 
            Within the last few years, I've interned at AdRoll, LoyaltyOne, and Bank of America in both
            data engineering and full-stack development roles. Through these experiences, I was able to 
            add a few things to my data toolkit such as Spark, Hadoop, and Storm. Feel free to poke around
            my website to learn more about me!
            <br/>
            <br/>
            I am currently seeking internship opportunities for September 2017 to April 2018 and full-time
            opportunities from August 2018 onwards. 
            If you'd like to get in touch, please shoot me an <a href="mailto:tracylei.yq@gmail.com">email</a>!
            </p>
        );
    }

    render() {
        return (
            <div id="outer-container" style={{height: '100%'}}>
                {this.getMenu()}
                <main id="page-wrap">
                    <div id="main-container">
                        <h1 id="intro"> Hello, I'm
                            <span className="pink"> Tracy</span>. 
                        </h1>
                        {this.getMainBlurb()}
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
