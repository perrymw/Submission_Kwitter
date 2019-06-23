import React, { Component } from "react";
import { connect } from "react-redux"
import { likePost as like, unlikePost as unlike, getMessageAction as getMessage} from "../../../actions"

class LikeButton extends Component {
  toggleLike = () =>{
    console.log(this.props.message)
    let whichFetch = false
    let likeid
    if(this.props.message.likes.length){
      for(const like of this.props.message.likes){
        console.log("running")
        if(like.userId === this.props.userId){
          whichFetch = true;
          likeid = like.id
        }
      }
    }
    if(whichFetch){
      const send = { token:this.props.token, id:likeid }
      this.props.unlike(send)
      .then(()=>{
        this.props.render()
      })
    }else{
      const send = { token:this.props.token, id:this.props.message.id }
      this.props.like(send)
      .then(()=>{
        this.props.render()
      })
    }
  }


  render() {
      return (
          <div className="ui labeled button" tabindex="0" >
            <div className="ui button" onClick={this.toggleLike} >
              <i className="heart icon"></i> Like
            </div>
            <label className="ui basic label">
              {(this.props.message && this.props.message.likes.length) || 0}
            </label>
          </div>
      )
    }
}

export default connect(({ auth })=>({
  token: auth.token,
  userId: auth.userId
}),{like, unlike, getMessage})(LikeButton)