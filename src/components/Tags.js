import React from 'react';
import { bindActionCreators }       from 'redux';
import { connect }                  from 'react-redux';

import { Tag } from 'antd';
import {deleteTag} from '../actions/index'
import './Tag.css'

class TagsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    closeTag(index) {
        this.props.deleteTag(index)

    }
    render() {
        const TagsList =  this.props.tags.map((tag, index) => (
            <div  key={Math.random().toString(36).substring(7)}>
                <Tag  className="tag__cont" closable onClose={() => this.closeTag(index)}>{tag}</Tag>
            </div>
        )
        )

        return (
            <div className="tag__grid">
                {TagsList}
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        list:state.list.list,
        tags: state.tags.tags
    }
);

const matchDispatchToProps = dispatch => bindActionCreators(
    {
        deleteTag
    },
    dispatch
);


export const Tags = connect(mapStateToProps, matchDispatchToProps)(TagsContainer);
