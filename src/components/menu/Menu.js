import React, { useState } from "react";
import './Menu.css';
//create hamburger menu
export default function Menu() {
    return (
        <div>
            <nav className="menu">
                <div className="toggle">
                    <button onClick={() => {

                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>
                <ul className="menu-items">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About us</a>
                    </li>
                    <li>
                        <a href="">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};