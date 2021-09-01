import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    static defaultProps = {
      country : "in",
      pageSize : 6,
      category : "general"
    }

    static propTypes = {
      name : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string
    }

    capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        console.log("From news item!")
        this.state = {
            articles : [],
            loading : true,
            page : 1,
            totalResults : 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} | NewsMonkey`
    }

    async updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87925e2b98644535b4cd74a092bd9900&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles : parsedData.articles, 
          totalResults : parsedData.totalResults, 
          loading:false})
    }

    async componentDidMount(){
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87925e2b98644535b4cd74a092bd9900&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading : true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData)
        // this.setState({articles : parsedData.articles, 
        //   totalResults : parsedData.totalResults, 
        //   loading:false})

        this.updateNews();
    }

    handlePrevClick = async ()=>{

      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87925e2b98644535b4cd74a092bd9900&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading : true})
      // let data = await fetch(url);
      // let parsedData = await data.json();

      // this.setState({
      //   page : this.state.page - 1,
      //   articles : parsedData.articles,
      //   loading : false
      // })

      this.setState({page : this.state.page - 1 })
      this.updateNews();
    }

    handleNextClick = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87925e2b98644535b4cd74a092bd9900&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading : true})
        // let data = await fetch(url);
        // let parsedData = await data.json();

        // this.setState({
        //   page : this.state.page + 1,
        //   articles : parsedData.articles,
        //   loading : false
        // })
        this.setState({page : this.state.page + 1 })
        this.updateNews();
    }

    fetchMoreData = async() => {
      this.setState({page : this.state.page + 1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87925e2b98644535b4cd74a092bd9900&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      this.setState({
        articles : this.state.articles.concat(parsedData.articles), 
        totalResults : parsedData.totalResults, 
        loading:false})
    };

    render() {
        return (
            <>
                <h2 className="text-center" style={{margin : '30px 0px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {/* { this.state.loading && <Spinner />} */}

                <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.articles.length !== this.state.totalResults}
                  loader={<Spinner />}
                >
                
                <div className="container">
                  <div className="row">
                      {this.state.articles.map((element)=>{
                          return <div className="col-md-4" key={element.url}>
                          <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
                      })}
                  </div>
                </div>
                </InfiniteScroll>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
            </>
        )
    }
}

export default News
