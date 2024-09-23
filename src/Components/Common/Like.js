import React, { Component } from 'react';

class Like extends Component {
  render() { 
    let classes = 'badge';
    if(!this.props.liked) classes += ' badge-danger';
    else
    classes += ' badge-success';

    let text_like = "";
    if(!this.props.liked) text_like += 'like';
    else
    text_like += 'liked';
    return (
      <>
      <span style={{cursor: 'pointer'}} onClick={this.props.onClickLike} className={classes}>{text_like}</span>
      </>
    );
  }
}
 
export default Like;