import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a href="#" className='navbar-brand'>
                <span className='logo'>
                    <i className='fa fa-calendar-check-o' ></i>
                    TodoApp
                </span>
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                
                    <li><a href="#/todos"><span className='navItem'>Tarefas</span></a></li>
                    <li><a href="#/about"><span className='navItem'>Sobre</span></a></li>
                
                </ul>
            </div>
        </div>
    </nav>
)