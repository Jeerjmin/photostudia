import React from 'react';
import { bindActionCreators }       from 'redux';
import { connect }                  from 'react-redux';

import { Input } from 'antd';
import {addTag} from '../actions/index';


const Search = Input.Search;

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);
        this.clickSearch = this.clickSearch.bind(this)

    }


    clickSearch(value) {
        this.props.addTag(value)
    }

    render() {
        return (
            <div>
                <Search
                    placeholder="Можно искать по хэштэгам и по названиям"
                    onSearch={value => this.clickSearch(value)}
                    enterButton
                />
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        list:state.list
    }
);

const matchDispatchToProps = dispatch => bindActionCreators(
    {
        addTag
    },
    dispatch
);


export const SmartSearch = connect(mapStateToProps, matchDispatchToProps)(SearchContainer);
