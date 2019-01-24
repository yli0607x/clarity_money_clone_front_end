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
      <div className="invite">
       <img alt="invite" className="whitepiggy" src="./images/piggywhite.png"/>
       <h5>Love Clarity Money? <br></br>Share it with your friends!</h5>
          <div className="facebook">
          <FacebookShareButton size={32} 
            url={shareUrl}
            quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          </div>
          <div className="twitter">
            <TwitterShareButton
            url={shareUrl}
            title={title}>
            <TwitterIcon
              size={32}
              round />
            </TwitterShareButton>
          </div>  
          <div className="linkedin">
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
          </div>
          <div className="email">
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
         <br></br>
      </div> 
    )
  }
}

export default Invite