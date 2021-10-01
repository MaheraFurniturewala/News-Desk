import React, { Component } from 'react'  //rce
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
    }
    render() {
        return (
            <div className="container my-3">
                <h2>News Desk - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="desc" imageUrl= "https://live-production.wcms.abc-cdn.net.au/9148df72b1c3bd9dd61852631f06c980?impolicy=wcms_crop_resize&cropH=1517&cropW=2709&xPos=291&yPos=51&width=862&height=485" newsUrl="Todo" />
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
