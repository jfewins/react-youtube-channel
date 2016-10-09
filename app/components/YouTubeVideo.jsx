import React from 'react';

var YouTubeVideo = React.createClass({
  // render: function() {
  //  console.log({this.props.title});
  //  console.log({this.props.item});
  //  let item = {this.props.item};
  //  console.log(item);
  //  let videoSrc = `https://www.youtube.com/embed/${this.props.item.snippet.resourceId.videoId}`;
  //  console.log(videoSrc);
  //  return (
  //    <li key={item.id}>{item.snippet.title}
  //    </li>
  //  );
  //}
  render: function() {
    console.log("test");
    return (
      <li key={this.props.item.id}>{this.props.item.snippet.title}
        <iframe width="" height="" src={"https://www.youtube.com/embed/" + this.props.item.snippet.resourceId.videoId} frameBorder="0" allowFullScreen=""></iframe>
      </li>
    )
  }
});

module.exports = YouTubeVideo;
