import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const SideNavContainer = styled.div`

position: absolute;
  width: 200px;
  height: 100vh;
  background-color: #f1f1f1;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  padding: 10px;
  border-bottom: 1px black solid;
  cursor: pointer;

  a {
    color: #333;
    text-decoration: none;
  }

  a.active {
    font-weight: bold;
  }

  &:hover {
    background-color: #b3aeaead;
  }
`;

const SideNav = () => {
    const [pathname, setpathname] = useState(window.location.pathname.split("/")[1])
  return (
    <SideNavContainer>
      <NavList>
      <NavItem>
          <NavLink   to="/dashboard" className={pathname == "dashboard" ? "active":""}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to="/addProducts" className={pathname == "addProducts" ? "active":""}>
            Add Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to="/updateProducts" className={pathname == "updateProducts" ? "active":""}>
            Update Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/orders" className={pathname == "orders" ? "active":""}>
            Orders
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to="/delivery" className={pathname == "delivery" ? "active":""}>
            Delivery
          </NavLink>
        </NavItem>
      </NavList>
    </SideNavContainer>
  );
};


export default SideNav