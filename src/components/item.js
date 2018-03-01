import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

export default class Item extends React.Component {

    render() {
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={this.props.view} />}
                >
                    <Meta
                        title={this.props.name}
                        description={this.props.price}
                    />
                </Card>
            </div>

        )
    }
}
