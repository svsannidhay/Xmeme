import React from 'react'
import './Grid.css';
import './PostForm.css';
import './Button.css';

class PostForm extends React.Component {
  render() {
    return(
      <section className="postForm ">
      <div className="container">
        <div className="input-form col span-1-of-2">
          <h3 className="postForm-text">Post a meme</h3>
          <form onSubmit = {this.props.onFormSubmit}>
            <input className ="input-field input-name" type="text"
              placeholder = "Name" value = {this.props.name} 
              name = "name"
              onChange = {this.props.onInputChange}
              required
            />
            <input className ="input-field input-caption" type="text"
              placeholder = "Caption" value = {this.props.caption}
              name = "caption"
              onChange = {this.props.onInputChange}
              required
            />
            <input className ="input-field filed input-url" type="text"
              placeholder = "Meme Url" value = {this.props.url}
              name ="url"
              onChange = {this.props.onInputChange}
              required
            />
            <button className="btn" 
            type="submit">Submit</button>
          </form>
        </div>
        <div className="col span-1-of-2">
          
        </div>
        <div className="clearfix"></div>
      </div>
      </section>
    );
  }
}

export default PostForm;