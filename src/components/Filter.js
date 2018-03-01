import React from 'react';
import { bindActionCreators }       from 'redux';
import { connect }                  from 'react-redux';
import {filterValues} from '../actions/index'
import { Slider } from 'antd';
import './Filter.css'


class SliderContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = { min: 0, max: 0}
        this.onChange = this.onChange.bind(this);
        this.Min = this.Min.bind(this)
        this.Max = this.Max.bind(this)


    }

    onChange(value) {

        this.props.filterValues(value)
    }

    Min() {
        if (this.props.list[0]) {
            let list = this.props.list
            let min = list[0].price;
            for (let i = 0; i<list.length; i++) {
                if (list[i].price < min) min=list[i].price
            }
            this.setState({min: min})
        }
        return 0
    }

    Max() {
        if (this.props.list[0]) {
            let list = this.props.list
            let max = list[0].price;
            for (let i = 0; i<list.length; i++) {
                if (list[i].price > max) max=list[i].price
            }
            this.setState({max: max})
        }
        return 0
    }


    componentWillMount() {
        this.Min()
        this.Max()
    }

    render() {
      
        return (
            <div className="filter__cont">
                <div className="filter__text">
                    <h4>Стоимость</h4>
                    <div className="filter__price">
                        <h4>{this.props.minmax[0] ? this.props.minmax[0] : this.state.min}-</h4>
                        <h4>{this.props.minmax[1] ? this.props.minmax[1] : this.state.max}</h4>
                    </div>
                </div>
                <Slider range step={100}
                    defaultValue={[this.state.min,this.state.max]}
                    min={this.state.min} max={this.state.max}
                    onChange={value => this.onChange(value)}
                    onAfterChange={this.onAfterChange} />
            </div>

        )

    }
}



const mapStateToProps = state => (
    {
        list:state.list.list.filter(item =>  state.tags.tags.every(el => ( item.params.includes(el) || item.name.includes(el) ) )),
        tags: state.tags.tags,
        minmax:state.filter.value

    }
);


const matchDispatchToProps = dispatch => bindActionCreators(
    {
        filterValues
    },
    dispatch
);


export const Filter = connect(mapStateToProps, matchDispatchToProps)(SliderContainer);
