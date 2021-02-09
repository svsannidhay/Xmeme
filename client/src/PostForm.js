import React from 'react'
import './Grid.css';
import './PostForm.css';

const card = {
  name: "",
  caption: "",
  imgUrl: "",
}

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      caption: "",
      imgUrl: "",
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange (event) {
    this.setState({
      [event.target.name]: event.target.value 
    });
    console.log(this.state);
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target);
  // }
  render() {
    return(
      <section className="postForm ">
      <div className="container">
        <div className="input-form container col span-1-of-2">
          <h3 className="postForm-text">Post a meme</h3>
          <form>
            <input className ="input-field input-name" type="text"
              placeholder = "Name" value = {this.state.name} 
              name = "name"
              onChange = {this.onInputChange}
            />
            <input className ="input-field input-caption" type="text"
              placeholder = "Caption" value = {this.state.caption}
              name = "caption"
              onChange = {this.onInputChange}
            />
            <input className ="input-field filed input-url" type="text"
              placeholder = "Meme Url" value = {this.state.imgUrl}
              name ="imgUrl"
              onChange = {this.onInputChange}
            />
            <button type="submit">Submit</button>
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