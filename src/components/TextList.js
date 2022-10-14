import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const TextList = (props) => {
  const [textList, setTextList] = useState([]);
  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => {
        setTextList(response.data);
      });
  }, []);

  return (
    <div className="ui relaxed divided list">
      {textList.map((text) => {
        return (
          <div className="item" key={text.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${text.id}`} className="header">
                {text.title}
              </Link>
              <div className="description">
                {moment().format("MMMM Do YYYY, h:mm:ss a")}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TextList;
