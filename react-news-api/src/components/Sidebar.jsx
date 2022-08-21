import React from 'react'
import logo from '../logo.svg'
import { NewsItem } from './NewsItem'

console.log(NewsItem);

const Sidebar = ({ changeCategory,category,hamburgerMenuClose }) => {
  return (
    <aside>
        <div className="sidebar__logo">
            <h1><img src={logo} alt="React" /></h1>
        </div>
        <ul className='sidebar__news-list'>
        { NewsItem.map((item,index) => {
            return (
                <li 
                    key={index}
                    onClick={(e) => {
                        changeCategory(e)
                        hamburgerMenuClose()
                     }}
                    style={category === item.title ? {backgroundColor : "#AAD1CB"} : null}
                    className="sidebar__news-item"
                >
                    <div id={item.title} className="sidebar__news-desc">
                        <span>{item.icon}</span>
                        <p>{item.title}</p>
                    </div>
                </li>
            )
        })}
        </ul>
    </aside>
  )
}

export default Sidebar
