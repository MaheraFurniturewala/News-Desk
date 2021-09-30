import React, { Component } from 'react'  //rce
import NewsItem from './NewsItem';

export class News extends Component {
    render() {
        return (
            <div>
                News Component
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        )
    }
}

export default News
