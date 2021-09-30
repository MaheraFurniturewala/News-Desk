import React, { Component } from 'react'  //rce
import NewsItem from './NewsItem';

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>News Desk - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="desc" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="desc" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="desc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
