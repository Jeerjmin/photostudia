import React from 'react';
import { bindActionCreators }       from 'redux';
import { connect }                  from 'react-redux';
import Item from '../../components/item'
import './List.css'

class ListContainer extends React.Component {

    render() {

        const test =  this.props.list.map((l) => (
            <div className="grid-element" key={l.id}>
                <Item name = {l.name} price = {l.price} view= {l.view} />
            </div>
        )
        )
        return (
            <div className="grid" >

                {test}
            </div>
        )

    }
}



const mapStateToProps = state => (
    {
        list:state.list.list.filter(item =>  state.tags.tags.every(el => ( item.params.includes(el) || item.name.includes(el) ) )) ,
        tags:state.tags.tags,
        filterValues:state.filter.value
    }
);


const matchDispatchToProps = dispatch => bindActionCreators(
    {

    },
    dispatch
);


export const List = connect(mapStateToProps, matchDispatchToProps)(ListContainer);
