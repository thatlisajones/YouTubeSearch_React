import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import _ from "lodash";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import { VideoList, VideoListItem } from "./components/VideoList";
import API from "./utils/API";

//this allows the component did mount and render to work
class App extends Component {
  //state will reload the page every time one of these things is true
  state = {
    videos: [],
    selectedVideo: null,
  };
  //called the first time the site renders
  //do the set up for the application - know you have a component on the page
  componentDidMount() {
    this.searchYouTube("kittens in buckets");
  };
  
  searchYouTube = term => {
    API.searchVideos(term)
    .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] }))
    .catch(err => console.log(err));
  };

  selectVideo = video => {
    this.setState({ selectedVideo: video });
  }

  throttledSearch = _.debounce(this.searchYouTube, 800);

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar searchYouTube={this.throttledSearch} />
          </Col>
        </Row>
        <Row>
          <Col md="9">
            <VideoDetail video={this.state.selectedVideo} />
          </Col>
          <Col md="3">
            <VideoList>
              {this.state.videos.map(video => (
                <VideoListItem 
                  video={video} 
                  key={video.id.videoId || video.id.playlistId} //special key that React uses and it never changes-- we can't use it
                  selectedVideo={this.state.selectedVideo} 
                  selectVideo={this.selectVideo}
                /> 
              ))}
            </VideoList>
          </Col>
        </Row>
      </Container>
      
    );
  }
};

export default App;