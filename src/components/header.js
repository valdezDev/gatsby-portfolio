import PropTypes from 'prop-types';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from "react-scroll";
import brandImg from '../images/brandImg.jpg';

class Header extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" dark expand="sm">
          <div className="container">
            <Link
              activeClass="active"
              to="index-intro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1250}
            >
              <NavbarBrand className="dev-brand" href="/"><img src={brandImg} className="brand-img rounded-circle" alt="valdezDev brand img" />{this.props.siteTitle}</NavbarBrand>
            </Link>
            <NavbarToggler className="nav-toggler" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="card-2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1250}
                  >
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="card-3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1250}
                  >
                    Projects
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="card-4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1250}
                  >
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="blog-link">
                <NavLink href="/blog">
                  A Dev's Blog
                </NavLink>
              </NavItem>  
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;