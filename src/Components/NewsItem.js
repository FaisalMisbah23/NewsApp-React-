import React, { Component } from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export class NewsItem extends Component {
  render() {
    let {title, description,urlToImage,url,author,date,source} = this.props;
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
      <div style={{
      display: "flex",
    justifyContent: "flex-end",
    right: "0",
    position: "absolute",
    }} >
    <span class=" badge rounded-pill bg-danger" style={{left: '90%',zindex: "1"}} >
    {source}&#xF588;
  </span></div>
  <img src={!urlToImage?"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg":urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
  
    <p className="card-text">{description}</p>
    <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
    {/* eslint-disable-next-line */}
    <a href={url} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
</>
    )
  }
}

export default NewsItem
