import Header from './Header'
import Footer from './Footer'
import React, {Component} from 'react'
import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Header />
                {this.props.children}
                <Footer /> 
            </div>
        )
    }
}
export default Layout;