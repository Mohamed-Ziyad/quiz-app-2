import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Spinner
} from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSchool,
  faUserGraduate,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import { t } from 'i18n'

import { USER_TYPE_STUDENT, USER_TYPE_SCHOOL } from 'modules/auth/constants'

const USER_TYPE_ICON = {
  [USER_TYPE_STUDENT]: faUserGraduate,
  [USER_TYPE_SCHOOL]: faSchool
}

export default class NavigationComponent extends Component {
  static propTypes = {
    anyFetching: PropTypes.bool.isRequired,
    category: PropTypes.string,
    user: PropTypes.object,
    logoutAndRedirect: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { anyFetching, category, user, logoutAndRedirect } = this.props
    return (
      <Navbar color="primary" dark expand="md" className="mb-3">
        <LinkContainer to={`/${category}`}>
          <NavbarBrand href={`/${category}`}>
            Home{anyFetching ? <Spinner size="sm" className="ml-1" /> : null}
          </NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user ? (
              <Fragment>
                <NavItem>
                  <NavLink>
                    <FontAwesomeIcon icon={USER_TYPE_ICON[user.type]} />{' '}
                    {user.name} {user.surname}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={logoutAndRedirect}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </NavLink>
                </NavItem>
              </Fragment>
            ) : (
              <NavItem>
                <LinkContainer to="/login">
                  <NavLink href="/login">{t('login')}</NavLink>
                </LinkContainer>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
