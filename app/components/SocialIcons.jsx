import React from 'react';

class SocialIcons extends React.Component {

    render() {
        return (
                <ul>
                <li>
                    <a href="http://www.github.com/tracylei">
                        <i className="fa fa-github fa-6x" />
                    </a>
                </li>
                <li>
                    <a href="http://www.linkedin.com/in/tracylei">
                        <i className="fa fa-linkedin-square fa-6x" />
                    </a>
                </li>
                </ul>
        );
    }

}

export default SocialIcons;
