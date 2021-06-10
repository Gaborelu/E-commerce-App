import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Gabotronics</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <NavDropdown title='Produse' id='produse'>
                <LinkContainer to='/phones'>
                  <NavDropdown.Item>Telefoane</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/laptop'>
                  <NavDropdown.Item>Laptopuri</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/pc'>
                  <NavDropdown.Item>Desktop-PC</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/periferice'>
                  <NavDropdown.Item>Periferice si accesori</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Deconectare
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Contul meu
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Utilizatori</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Produse</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Comenzi</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cosul meu
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
