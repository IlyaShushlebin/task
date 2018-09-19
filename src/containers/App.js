import React, { Component } from 'react'
import { Link } from 'react-router'


export default class App extends Component {

    render() {

        return (
            <div className='container'>
                <ul>
                    <li><Link to='/spisok'>Список сотрудников</Link></li>
                    <li><Link to='/addzap'>Добавить запись</Link></li>
                    <li><Link to='/settings'>Настроить</Link></li>
                </ul>
                {this.props.children}
            </div>
        )

    }
}