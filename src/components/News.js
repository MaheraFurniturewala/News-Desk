import React, { Component } from 'react'  //rce
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "ABC News",
            "title": "Cricket Australia scrambles to reschedule Sheffield matches ahead of Ashes series",
            "description": "Contenders for the Australia XI to face England in the men's Ashes may not get much of a chance to play red-ball cricket before the series begins in December.",
            "url": "http://www.abc.net.au/news/2021-09-30/cricket-australia-scrambling-to-reschedule-sheffield-shield/100505546",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/9148df72b1c3bd9dd61852631f06c980?impolicy=wcms_crop_resize&cropH=1517&cropW=2709&xPos=291&yPos=51&width=862&height=485",
            "publishedAt": "2021-09-30T09:51:26Z",
            "content": "The Sheffield Shield remains in a state of flux, as Cricket Australia (CA) attempts to ensure Test stars and hopefuls have ample time in red-ball cricket ahead of the men's Ashes.\r\nKey points:\r\n<ul><… [+2577 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ];
    constructor() {
        super();
        console.log("News component constructor");;
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>News Desk - Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div key={element.url} className="col-md-3">
                    <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl= {element.urlToImage} newsUrl={element.url} />
                </div>
                })}
                </div>
            </div>
        )
    }
}

export default News
