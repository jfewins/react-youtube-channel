import React from 'react';
import YouTubeVideo from './YouTubeVideo';

export default ({playListItems}) => (
  <ul>{playListItems.items.map(item =>
    <YouTubeVideo title="test" item={item} />
    )}</ul>
)
