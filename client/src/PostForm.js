import React from 'react'
import './Grid.css';
import './PostForm.css';
import './Button.css';
import axios from './axios';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      caption: "",
      imgUrl: "",
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange (event) {
    this.setState({
      [event.target.name]: event.target.value 
    });
    console.log(this.state);
  }
  
  onFormSubmit (event) {
    event.preventDefault();
    console.log(this.state);
    axios.post("/cards",this.state);
  }

  render() {
    return(
      <section className="postForm ">
      <div className="container">
        <div className="input-form col span-1-of-2">
          <h3 className="postForm-text">Post a meme</h3>
          <form onSubmit = {this.onFormSubmit}>
            <input className ="input-field input-name" type="text"
              placeholder = "Name" value = {this.state.name} 
              name = "name"
              onChange = {this.onInputChange}
              required
            />
            <input className ="input-field input-caption" type="text"
              placeholder = "Caption" value = {this.state.caption}
              name = "caption"
              onChange = {this.onInputChange}
              required
            />
            <input className ="input-field filed input-url" type="text"
              placeholder = "Meme Url" value = {this.state.imgUrl}
              name ="imgUrl"
              onChange = {this.onInputChange}
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