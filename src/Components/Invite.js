import React, { Component } from 'react'
import '../App.css';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share';


class Invite extends Component {

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     
     //console.log("inside Invite", this.props.transactions)
     const shareUrl = 'https://claritymoney.com/';
     const title = "I've been using Clarity Money and it's incredible. It's like having someone watch your back and it's free. Sign up now!"
    return (
      <div >
       <h4>Invite</h4>
       Love Clarity Money? 
       Share it with your friends! 
       <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
          <EmailShareButton
            url={shareUrl}
            subject="Check out Clarity Money"
            body="I've been using Clarity Money and it's incredible. It's like having someone watch your back and it's free. Sign up now! https://link.clarity.com/H1XgkxRizV"
            className="Demo__some-network__share-button">
            <EmailIcon
              size={32}
              round />
          </EmailShareButton>
        </div>
        
       <hr></hr>
      </div> 
    )
  }
}

export default Invite