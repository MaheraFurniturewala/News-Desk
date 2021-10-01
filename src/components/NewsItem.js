import React, { Component } from 'react'  //rce

export class NewsItem extends Component {
   
    constructor() {
        super();
        
    }
    render() {
        //destructuring
        let {title, description,imageUrl,newsUrl} = this.props;
        return (
            <div> 
                <div className="card " style={{width: '18rem'}}>
                    <img src={imageUrl?imageUrl:"https://static-ai.asianetnews.com/images/01es5t4n5fd10nxyn985a0hwh4/asteroid-to-hit-on-25th-december-5-jpg_1200x630xt.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
