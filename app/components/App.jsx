import React from 'react';
import { elastic as Menu } from 'react-burger-menu'
import SocialIcons from './SocialIcons.jsx'

class App extends React.Component {

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
                    <img id="profile" src="img/profile.jpg" />
                    <a id="home" className="menu-item" href="/">home</a>
                    <a id="about" className="menu-item" href="/about">about</a>
            </Menu>
        );
    }

    getMainBlurb() {
        return (
            <p id="main-blurb"> 
            I am currently a 4th year Computer Science student at the University of Waterloo. 
            Within the last few years, I've interned at AdRoll, LoyaltyOne, and Bank of America in both
            data engineering and full-stack development roles. 
            <br/>
            <br/>
            Through these experiences, I was able to 
            add a few things to my data toolkit such as Spark, Hadoop, and Storm. Feel free to poke around
            my website to learn more about me!
            <br/>
            <br/>
            I am currently seeking internship opportunities for September 2017 to April 2018 and full-time
            opportunities from August 2018 onwards. 
            If you'd like to get in touch, shoot me an <a href="mailto:tracylei.yq@gmail.com">email</a>!
            </p>
        );
    }

    render() {
        return (
            <div id="outer-container" style={{height: '100%'}}>
                {this.getMenu()}
                <span id="icons">
                    <SocialIcons />
                </span>
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
