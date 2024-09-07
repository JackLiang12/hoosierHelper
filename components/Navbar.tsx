import React from 'react';
import { IconHome, IconMessage, IconUser, IconLogin } from "@tabler/icons-react"; // Assuming IconLogin is available

export default function Navbar() {
  return (
    <nav className="Navbar absolute">
      <img className="logo" src="/Hoosier2.png" alt="Logo" />
      <div className="itemGroup">
        <div className="NavItem">
          <span className="block sm:hidden"><IconHome /></span>
          <span className="hidden sm:block">Home</span>
        </div>
        <div className="NavItem">
          <span className="block sm:hidden"><IconMessage /></span>
          <span className="hidden sm:block">About</span>
        </div>
        <div className="NavItem">
          <span className="block sm:hidden"><IconUser /></span>
          <span className="hidden sm:block">Contact</span>
        </div>
        <div className="NavItem">
          <span className="block sm:hidden"><IconLogin /></span>
          <span className="hidden sm:block">Login</span>
        </div>
      </div>
    </nav>
  );
}
