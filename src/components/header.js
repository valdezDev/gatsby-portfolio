import PropTypes from 'prop-types';
import React from 'react';
import {
  Collapse,
  Container,
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
      
        <Navbar fixed="top" dark expand="sm">
          <Container>
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
                    to="about-me"
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
                    to="proj-container"
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
                    to="contact-card__name"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1250}
                  >
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
      
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