import React, { useEffect, useState } from "react";
import axios from "axios";

const TextDetails = (props) => {
  const { id } = props.match.params;
  const [textDetails, setTextDetails] = useState({});
  const [comments, setComments] = useState([]);
  //const [display_name, setDisplay_name]=useState('');
  //const [body, setBody]= useState('');

  const [comment, setComment] = useState({
    display_name: "",
    body: "",
  });

  const handleCommentSubmit = (comment) => {
    axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`, {
      display_name,
      body,
    });
  };

  const handleOnchange=(event)=>{
     setCommentBody({...comment, [event.target.name]:event.target.value});
  }

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((response) => {
        setTextDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      });
  }, []);

  return (
    <>
      <h2 className="ui header">{textDetails.title}</h2>
      <p>{textDetails.created_at}</p>
      <p>{textDetails.content}</p>
      <h2>Yorumlar</h2>
      {comments.map((comment) => {
        return (
          <div className="ui list">
            <div className="item">
              <img
                className="ui avatar image"
                src="/images/avatar2/small/rachel.png"
              />
              <div className="content">
                <a className="header">{comment.display_name}</a>
                <div className="description">
                  {comment.body} | {comment.created_at}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <h3>Yorum Yaz</h3>

      <form class="ui form">
        <div className="ui left icon input">
            <input
              type="text"
              name="display_name"
              placeholder="Adınız..."
              onChange={handleOnchange}
              value={comment.display_name}
            />
          <i className="users icon"></i>
        </div>
            <textarea
              name="body"
              placeholder="Tell us more"
              rows="3"
              onChange={handleOnchange}
              value={comment.body}
            ></textarea>
      </form>
    </>
  );
};
export default TextDetails;

// https://www.youtube.com/watch?v=V9FBsyhHkUg&list=PL8IHDq7oEkgEhP0jVBmc3R9qKy7sd9Vfa&index=5    22:47
