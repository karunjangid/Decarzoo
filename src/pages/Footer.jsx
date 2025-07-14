import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { FcHome } from "react-icons/fc";
import { FcList } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="fixedFooter">
      <nav className="footerNav">
        <ul className="footerNavList">
          <li className="footerNavItem active">
            <span className="footerNavLink" onClick={() => navigate('/')}>
              <FcHome className='icon' />  
              <span>Home</span>
            </span>
          </li>
          <li className="footerNavItem">
            <span className="footerNavLink" onClick={() => navigate('/categories')}>
                <FcList className='icon'/>
              <span>Categories</span>
            </span>
          </li>
          <li className="footerNavItem">
            <span className="footerNavLink" onClick={() => navigate('/mall')}>
            <FcDepartment className='icon'/>
              <span>Mall</span>
            </span>
          </li>
          <li className="footerNavItem">
            <span className="footerNavLink" onClick={() => navigate('/videofinds')}>
            <FcConferenceCall className='icon'/>
              <span>Refer & Earn</span>
            </span>
          </li>
          <li className="footerNavItem">
            <span className="footerNavLink" onClick={() => navigate('/myorders')}>
            <FcShipped className='icon'/>
              <span>My Orders</span>
            </span>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
