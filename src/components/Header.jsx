import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='flex bg-gray-300 justify-between items-center p-4'>
            <h1 className='ml-5 text-3xl'>Logo</h1>
            <ul className='flex space-x-12 mr-60 text-xl'>
                <li>
                    <NavLink to="/"
                        //ebhave isActive use kore navbar click koray ki color ache sheta bujhanur jonno
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        {props.home}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bookList" className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>
                        {props.BookList}
                    </NavLink></li>
                <li><li>
                    <NavLink to="/addBook" className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>
                        {props.addBook}
                    </NavLink></li></li>
            </ul>
        </div>
    );
}

export default Header;
