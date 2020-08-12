import React from 'react';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '../../assets/css/swipeable.css';


class ListItem extends React.Component {
    render() {
        return <li data-icon="image2">{this.props.item.name}</li>;
    }
}

export default class Demo extends React.Component {


    render() {
        return (
            <SwipeableList>
                <SwipeableListItem
                    swipeLeft={{
                        content: <div>Revealed content during swipe</div>,
                        action: () => console.info('swipe action triggered')
                    }}
                    swipeRight={{
                        content: <div>Revealed content during swipe</div>,
                        action: () => console.info('swipe action triggered')
                    }}
                    onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
                >
                    <div>Item name</div>
                </SwipeableListItem>
            </SwipeableList>
        );
    }
}
