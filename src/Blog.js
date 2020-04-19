import * as React from "react";
import "./assets/styles/style.css";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

function Blog() {
  return (
    <div className="container">
      <div className="blog-page-name" onClick={this.toggleBlogPage}>
        number1
      </div>
      <div className="blog-page-content">content</div>
    </div>
  );
}

export default Blog;
