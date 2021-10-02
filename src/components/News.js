import React, { Component } from 'react'  //rce
import NewsItem from './NewsItem';

//order of execution --> constructor>render>componentDidMount

export class News extends Component {
    constructor() {
        super();
        console.log("News component constructor");;
        this.state = {
            articles: [],
            loading: false,
            page:1,
        }
    }

    //lifecycle method
    //will run after everything is rendered --> render method 
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8de7c0e3bf3d4b52a6eab37cdce09820&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }

     handleNextClick = async ()=>{
         if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

         }
         else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8de7c0e3bf3d4b52a6eab37cdce09820&page=${this.state.page+1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page : this.state.page + 1,
                articles:parsedData.articles
            });
         }
    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8de7c0e3bf3d4b52a6eab37cdce09820&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles:parsedData.articles
        });
    }

    render() {
        return (
            <div className="container my-3">
                <h1>News Desk - Top Headlines</h1>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div key={element.url} className="col-md-3">
                    <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl= {element.urlToImage} newsUrl={element.url} />
                </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
                <button  type="button" className="btn btn-dark mx-2" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
            
        )
        
    }
    
}

export default News
