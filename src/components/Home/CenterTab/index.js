import React, { useEffect, useState } from "react";
import { Filter } from "./Filter";
import "./index.css"
import { Post } from "./Post";
import { getNewfeed } from "helpers/firebase/db";

export const CenterTab = ({ userData }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPosts(await getNewfeed());
    };

    fetchData();
  }, [])

  return (
    <div className="centerTab">
      <Filter />
      <div className="newsfeed">
        {posts.map((item) => <Post key={item.pid} post={item} />)}
      </div>
    </div>
  );
}