import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import PlayList from './components/PlayList'

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

let youTubeAPIRequest = "https://www.googleapis.com/youtube/v3/playlistItems\?maxResults=50\&part\=snippet\&playlistId\=UUYHiZDU0YLN0dWLWSCP1JYQ\&key\=AIzaSyAKh4DIAeCGl1kesHiaaSg2dq4-Zota9vQ";

var playListItems = function () {
  var items;
  $.ajax({
    // The URL for the request
    url: youTubeAPIRequest,

    // Whether this is a POST or GET request
    type: "GET",

    // The type of data we expect back
    dataType : "json",

    async: false,
  })
    .done(function( json ) {
      items = json;
    })
    .fail(function( xhr, status, errorThrown ) {
      alert( "Sorry, there was a problem!" );
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
      console.dir( xhr );
    })
    .always(function( xhr, status ) {
      alert( "The request is complete!" );
    });
  return items;
}();

const playListItems_2 = {
 "kind": "youtube#playlistItemListResponse",
 "etag": "\"I_8xdZu766_FSaexEaDXTIfEWc0/S9GnlZCOD1yyNDe81HP2P2v6WzU\"",
 "nextPageToken": "CAUQAA",
 "pageInfo": {
  "totalResults": 47,
  "resultsPerPage": 5
 },
 "items": [
  {
   "kind": "youtube#playlistItem",
   "etag": "\"I_8xdZu766_FSaexEaDXTIfEWc0/hHEDpx4xtvVEJK2Dum1W00o_ecI\"",
   "id": "VVVZSGlaRFUwWUxOMGRXTFdTQ1AxSllRLjJBNDlTd25oU25Z",
   "snippet": {
    "publishedAt": "2016-09-08T20:08:31.000Z",
    "channelId": "UCYHiZDU0YLN0dWLWSCP1JYQ",
    "title": "Open Source Transformation - Marc Neeley",
    "description": "This talk is part of Cerner's Tech Talk series. Check us out at http://engineering.cerner.com/ and @CernerEng\n\nOpen Source Transformation\n\nAfter decades of relying on commercial off-the-shelf software (COTS), thousands of organizations are moving to Open Source Solutions (OSS). Those who make the leap for cost containment reasons soon realize the greater potential of these modern platforms. Indeed, flexibility and extensibility will transform your IT infrastructure in terms of costs, efficiency, flexibility, and overall control. As a result, your applications will become far more responsive and can evolve easily along with your business demands. Advanced integration capability of modern OSS reduces dependency on legacy systems, but retains compatibility while transition is underway. Benefit of OSS isn’t achieved without adoption commitment from supporting organizations, so understanding those things an organization can do to optimize this benefit is important.\n \nJoin us for this talk and learn:\n \n- Where OSS has evolved from and why the demand is increasing\n- See examples of those benefiting from OSS in their organization\n- Maturing your organization in practices of OSS\n- Strategies to introduce “Open Source – First” thinking into your organization\n\nAbout the Speaker\n \nMarc Neeley is the Director of Technology at OCI and has a 27 year career serving the industry with expertise in Architecture and Design in complex business-critical environments. He has held past title of Principal Software Engineer and has applied his expertise with application and integration solutions to the Defense, Healthcare, and Technology industries to name a few. His Enterprise Architecture experience has been valuable in helping organizations develop strategic paths to contemporary technology targets. He manages strategic technology innovations at OCI as well as Open Source Transformation Services initiatives. He is a graduate of the Univ. of Missouri - St. Louis",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/2A49SwnhSnY/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/2A49SwnhSnY/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/2A49SwnhSnY/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/2A49SwnhSnY/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/2A49SwnhSnY/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CernerEng",
    "playlistId": "UUYHiZDU0YLN0dWLWSCP1JYQ",
    "position": 0,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "2A49SwnhSnY"
    }
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"I_8xdZu766_FSaexEaDXTIfEWc0/AUUsFQIboyLBO2HBEc5PflwQLIw\"",
   "id": "VVVZSGlaRFUwWUxOMGRXTFdTQ1AxSllRLjdKLURmUzUyYm5J",
   "snippet": {
    "publishedAt": "2016-07-11T20:59:11.000Z",
    "channelId": "UCYHiZDU0YLN0dWLWSCP1JYQ",
    "title": "Genetic Algorithms - Jeremy Fisher",
    "description": "This talk is part of Cerner's Tech Talk series. Check us out at http://engineering.cerner.com/ and @CernerEng\n\nGenetic Algorithms: Programming by the Seat of Your Genes!\n \nThe term Genetic Algorithms sounds intimidating to most, a subject obviously beyond the comprehension of anyone with fewer than two advanced degrees. But in truth, genetic algorithms are – like the biological evolution that inspired them – little more sophisticated than trial and error, and their power to solve problems with complex constraints makes them a tool worth having. This talk will bring genetic algorithms out of academic papers and expensive textbooks and teach those of us in industry what's needed to put them to use.\n \nAbout the Speaker\n \nJeremy Fisher is Director of Advanced Engineering and Data Science in DST's Applied Analytics Group, where he leads a team of data hackers and algorithm junkies. Prior to joining DST, Mr. Fisher was a Group Technical Director at VML advancing brands like Gatorade and Revlon, and before that was Director of Software Engineering at Adknowledge, where he was responsible for the advertiser technology platform. His specialties are fast-paced engineering, internet-scale architectures, and leading the best and brightest engineers and scientists.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/7J-DfS52bnI/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/7J-DfS52bnI/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/7J-DfS52bnI/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/7J-DfS52bnI/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/7J-DfS52bnI/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CernerEng",
    "playlistId": "UUYHiZDU0YLN0dWLWSCP1JYQ",
    "position": 1,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "7J-DfS52bnI"
    }
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"I_8xdZu766_FSaexEaDXTIfEWc0/YZzKQTt54Y1a3Nh1URJLzEbx1ZA\"",
   "id": "VVVZSGlaRFUwWUxOMGRXTFdTQ1AxSllRLldkRWtRbTJFREtn",
   "snippet": {
    "publishedAt": "2016-02-09T06:30:39.000Z",
    "channelId": "UCYHiZDU0YLN0dWLWSCP1JYQ",
    "title": "Apache Mesos - Taking the I out of PaaS - Ken Sipe",
    "description": "This talk is part of Cerner's Tech Talk series. Check us out at http://engineering.cerner.com/ and @CernerEng\n\nTaking the I out of PaaS with Apache Mesos\n \nThe drive to continuous delivery, micro services and PaaS includes the need to auto scale and potentially auto provision services. This session will identify the legacy thinking of a statically partitioned world and drive to the scalable world of Apache Mesos.\n\nThis session will look at the failings of the many of today's cloud technology, identify the goals we have and look into the tooling of how to get there. In this session we will look at:\n- static vs elastic partitioning\n- vm vs containers\n- separating cluster capacity from application scale\n- load balancing with HAProxy\n- This session will be packed with demonstrations.\n\nAbout the Speaker\n\nKen Sipe is a Cloud Solution Architect at Mesosphere, focused on helping companies simplify the development and operation of large scale infrastructure and distributed systems with DCOS.  Before joining Mesosphere, Ken lead research and development at CenturyLink cloud business unit focused on the future of cloud and data-center automation. Ken is an author and award winning international speaker on the practices of software architecture and engineering, continuous delivery and agile practices. Ken is also an Apache Mesos contributor and a committer on the Myriad and HDFS framework projects.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/WdEkQm2EDKg/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/WdEkQm2EDKg/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/WdEkQm2EDKg/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/WdEkQm2EDKg/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/WdEkQm2EDKg/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CernerEng",
    "playlistId": "UUYHiZDU0YLN0dWLWSCP1JYQ",
    "position": 2,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "WdEkQm2EDKg"
    }
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"I_8xdZu766_FSaexEaDXTIfEWc0/UFRkbP95OMXKaYIWX5EFXwylUmk\"",
   "id": "VVVZSGlaRFUwWUxOMGRXTFdTQ1AxSllRLm9Jb2pmVVNUcktv",
   "snippet": {
    "publishedAt": "2015-08-18T17:43:15.000Z",
    "channelId": "UCYHiZDU0YLN0dWLWSCP1JYQ",
    "title": "Software Security Assurance - Bruce Jenkins",
    "description": "This talk is part of Cerner's Tech Talk series. Check us out at http://engineering.cerner.com/ and @CernerEng\n\nSoftware Security Assurance: A Convergence of Likely Events and Unlikely Partnerships\n \nAfter a wake-up-call security breach in 2005, the US Air Force ventured down a relatively uncharted path of protecting itself against one of the biggest threats in the 21st century: attacks on its applications and military data.  Hear from Bruce C Jenkins (Major, USAF, Ret.) about how he led what was then the largest US government agency software security solutions deployment and what  can be garnered from lessons learned about mindshare, management  and the lynchpin of today's secure software organization: the software developer\n \nAbout the Speaker\n \nBruce C Jenkins leads HP Fortify's information security program and works regularly with customers on Software Security Assurance (SSA) program design, measurement and reporting.  Since 2007 he has been building SSA solutions and collecting data on security program assessments across all industry sectors.  Bruce has experience in managing software development and network operations, and he held CISO-, CSO- and CIO-equivalent positions during his 28-year US Air Force career.  Bruce is a CISSP, CSSLP and CISM, and he holds a BS in computer science and MS in management science.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/oIojfUSTrKo/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/oIojfUSTrKo/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/oIojfUSTrKo/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/oIojfUSTrKo/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/oIojfUSTrKo/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CernerEng",
    "playlistId": "UUYHiZDU0YLN0dWLWSCP1JYQ",
    "position": 3,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "oIojfUSTrKo"
    }
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"I_8xdZu766_FSaexEaDXTIfEWc0/FdV7Cn-93ZVMgXiDKQ9H5B29umo\"",
   "id": "VVVZSGlaRFUwWUxOMGRXTFdTQ1AxSllRLjFkcjJHWV9Gd3hB",
   "snippet": {
    "publishedAt": "2015-09-09T18:55:54.000Z",
    "channelId": "UCYHiZDU0YLN0dWLWSCP1JYQ",
    "title": "DevCon KC: The Code Awakens",
    "description": "Created for engineers, by engineers, DevCon is Cerner's 5th annual internal developer's conference. This year featured two days of development, design, and Star Wars. \n\nMatt Wood, General Manager, Data Science, Amazon Web Services, and Eli Collins, Chief Technologist, Cloudera, kicked off each day with compelling keynote presentations. This year, we had over 140 presenters from across our organizations for nearly 100 talks covering topics spanning all aspects of software design, development, and deployment. \n\nWant to know more about what we do at Cerner Engineering? Check out engineering.cerner.com and follow us on Twitter @CernerEng.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/1dr2GY_FwxA/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/1dr2GY_FwxA/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/1dr2GY_FwxA/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/1dr2GY_FwxA/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/1dr2GY_FwxA/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CernerEng",
    "playlistId": "UUYHiZDU0YLN0dWLWSCP1JYQ",
    "position": 4,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "1dr2GY_FwxA"
    }
   }
  }
 ]
};



ReactDOM.render(
  <PlayList playListItems={playListItems} />,
  document.getElementById('app')
);
