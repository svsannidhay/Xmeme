import React from 'react'
import PostForm from './components/PostForm';
import MemeCards from './components/MemeCards';
import axios from './axios';

class PostAndMemes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      caption: "",
      url: "",
      submitted: 0,
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  onInputChange (event) {
    this.setState({
      [event.target.name]: event.target.value 
    });
  }
  
  async onFormSubmit (event) {
    event.preventDefault();
    await axios.post("/memes",this.state);
    await setTimeout(1000);
    this.setState({
      name: "",
      caption: "",
      url: "",
      submitted: this.state.submitted + 1,
    });
  }
  render(){
    return (
      <>
      <PostForm 
      name = {this.state.name} 
      caption = {this.state.caption}
      url = {this.state.url}
      onInputChange = {this.onInputChange}
      onFormSubmit = {this.onFormSubmit}
      />
      <MemeCards submitted = {this.state.submitted}/>
      </>
    );
  }
}

export default PostAndMemes;