import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyBBsWeptUcX2ootwtYSM-JUT7c-EN_lGf0'


class App extends Component  {

  constructor(props){
    super(props)

    YTSearch({key: API_KEY, term:'diy for kids'}, (videos) =>{
      console.log(videos)
      this.setState({videos})
    } )

    this.state = {videos: []}
  }

  render(){
    return (
    <div>
      <SearchBar/>
      <VideoDetail video={this.state.videos[0]} />
      <VideoList videos={this.state.videos} />
    </div>)
  }
  
}
ReactDOM.render(  <App /> , document.querySelector('.container'));
