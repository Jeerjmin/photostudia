import React from 'react';
import {List} from '../List/List'
import Menu from '../Menu/Menu'
import './App.css'
export default class App extends React.Component {

    render() {
        return (
            <div className="main__cont">
                < List />
                < Menu />
            </div>

        )
    }
}
