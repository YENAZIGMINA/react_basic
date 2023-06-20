import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const getPost = () => {
    axios.get("http://localhost:3004/posts").then((res) => {
      //.then(함수)==> json에서 값을 받은 후에 할일
      //.then((res)=>{})  //res의 매개변수를 타고 데이타를 받을수 있음
      //console.log(res);
      setPosts(res.data);
    });
  };
  //useEffect(함수,배열)
  useEffect(() => {
    getPost();
  }, []); //의존성배열 //배열이 비어있을때는 ListPage 컴퍼넌트가 실행될때 한번만 실행

  const deleteBlog=(id)=>{
    axios.delete(`http://localhost:3004/posts/${id}`).then(()=>{
      setPosts((prePost)=>{
        return prePost.filter((post)=>{
          return post.id !== id;
        })
      })
    })
  }

  const renderBlogList=()=>{
    if(posts.length===0){
      return <div>"blogs posts가 발견되지 않습니다."</div>
    }
    return posts.map((post) => {
      return (
        <Card key={post.id}>
          <div className="d-flex justify-content-between">
            <div>{post.title}</div>
            <button onClick={(e)=>{
              e.stopPropagation();
              deleteBlog(post.id)
            }}>button</button>
          </div>
        </Card>
      );
    })
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mt-3">Blogs</h1>

        <Link to="/blogs/create" className="btn btn-success">
          Create New
        </Link>
      </div>
    
      {renderBlogList()}
    
    </div>
  );
};

export default ListPage;
