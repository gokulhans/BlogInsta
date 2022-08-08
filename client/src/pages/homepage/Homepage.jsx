import { useLocation } from "react-router";
import { useEffect, useState } from "react";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";

export default function Homepage() {

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("/api/posts");
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, [search]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/insta");
      setPosts(res.data);
      console.log(res.data);
      console.log("called");
      console.log(posts);
    };
    fetchPosts();
  }, [search]);

  return (
    <>

      <div className="row">
        {posts.map((p, index) => (
          <div>
            {/* <p key={index}>caption = {p.text} </p>
          <p key={index}>id = {p.id} </p>
          <p key={index}>link= {p.link} </p>
          <p key={index}>likes= {p.likes} </p>
          <p key={index}>comments = {p.comments} </p>
          <p key={index}>time = {p.time} </p>
          <img key={index} src={"data:image/jpg;base64," + p.image} /> */}
            <div className="card">
              <img src={"data:image/jpg;base64," + p.image} alt="Avatar" />
              <div className="container">
                <h4><b>{p.id}</b></h4>
                <p>{p.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>






      {/* <Header />
      <div className="home">
        <br />
        <h1>INSTA DATA</h1>
        <Posts posts={posts} />
        <Sidebar />
      </div> */}
    </>
  );
}
