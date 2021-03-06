import React from 'react';
import { elastic as Menu } from 'react-burger-menu'
import SocialIcons from './SocialIcons.jsx'
import profile from '../img/profile.jpg'
import burger from '../img/burger.png'

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
                customBurgerIcon={ <img src={burger} /> }>
                    <img id="profile" src={profile} />
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
            I am looking to internship opportunities for September 2017 and full-time
            opportunities from August 2018 onwards. 
            If you'd like to get in touch, shoot me an <a href="mailto:tracylei.yq@gmail.com">email</a>!


            <br/>
            <br/>
            Through these experiences, I was able to 
            add a few things to my data toolkit such as Spark, Hadoop, and Storm. Feel free to poke around
            my website to learn more about me!
            </p>
        );
    }

    render() {
        return (
            <div id="outer-container">
                {this.getMenu()}
                <span id="icons">
                    <SocialIcons />
                </span>
                <main id="page-wrap">
                    <div id="sidebar" />
                    <div id="main-container">
                        <div id="main-content">
                            <h1 id="intro"> Hello, I'm
                                <span className="pink"> Tracy</span>. 
                            </h1>
                        {this.getMainBlurb()}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
