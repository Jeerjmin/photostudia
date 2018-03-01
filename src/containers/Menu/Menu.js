import React from 'react';
import {Filter} from '../../components/Filter'
import {Tags} from '../../components/Tags'
import {SmartSearch} from '../../components/SmartSearch'
import './Menu.css'


export default class MenuContainer extends React.Component {

    render() {

        return (
            <div className="menu__cont">
                < SmartSearch />
                < Tags />
                < Filter />
            </div>
        )

    }
}
