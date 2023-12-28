import React , { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
 
    
    static defaultProps = {
        country:"in" ,
        pagesize: 10 ,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string, 
        pagesize:PropTypes.number,
        category:PropTypes.string
    }
    Capilizedfirstletter=(string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    constructor(props){
        super(props)
        console.log("I am a Constructor")
        this.state = {
        articles:[],
        loading:false,
        }
        document.title = `${this.Capilizedfirstletter(this.props.category)} - Daily News`
    }
    async componentDidMount(){
        console.log("ABC")
        this.props.setProgress(0);
         // eslint-disable-next-line
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=edacbb129511830e5831d1a9870fbe68&page=${this.state.page = 1}&pagesize=${this.props.pagesize}`;
         this.setState({loading:true})
        let data= await fetch(url)
        let parsedData= await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles , totalArticles:parsedData.totalResults , loading:false})
        this.props.setProgress(100);
    }

    NextPage= async()=>{
        this.props.setProgress(0);
        if(!(this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pagesize))){    
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=edacbb129511830e5831d1a9870fbe68&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
       this.setState({loading:true})
       this.props.setProgress(30);
        let data= await fetch(url)
        let parsedData= await data.json()
        console.log(parsedData)
        this.setState({
        page:this.state.page + 1,
        articles: parsedData.articles,
        loading:false
        
    })
        this.props.setProgress(100);
        }}
       
        
    PreviousPage= async ()=>{
        
        console.log("Previous")
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=edacbb129511830e5831d1a9870fbe68&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        this.props.setProgress(20);
        let data= await fetch(url)
        let parsedData= await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })
        this.props.setProgress(100);
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 style={{marginTop:"70px"}}> Daily News -Top {this.Capilizedfirstletter(this.props.category)} Headlines </h1>
       {  this.state.loading &&  <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return  <div className="my-3 col-md-4" key={element.url} >
   <NewsItem title={element.title } description={element.description} urlToImage={element.urlToImage} url={(element.url)} author={element.author} date={element.publishedAt} source={element.source.name} content={element.source.id} />
  
   </div>

            
        })}
     
     </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.PreviousPage} className="btn btn-dark">&laquo; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pagesize)} type="button" onClick={this.NextPage} className="btn btn-dark">Next &raquo;</button>
        </div>
      </div>
    )
  
}}

export default News