import * as React from "react";
import "./assets/styles/style.css";

function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="main-box">
        <div className="col-md-12 main-header">
          <div className="col-md-4 tb-c">Pages</div>
          <div className="col-md-4 tb-c">Description</div>
          <div className="col-md-4 tb-c">Last Updated</div>
        </div>
        <div className="col-md-12 main-h">
          {" "}
          <div className="col-md-4 tb-c-pages">
            <i class="fa fa-file" aria-hidden="true"></i>Home
          </div>
          <div className="col-md-4 tb-c"> deploy Home Page to github pages</div>
          <div className="col-md-4 tb-c">6 hours ago</div>
        </div>
        <div className="col-md-12 main-h">
          {" "}
          <div className="col-md-4 tb-c-pages">
            <i class="fa fa-file" aria-hidden="true"></i>About
          </div>
          <div className="col-md-4 tb-c">
            {" "}
            deploy About Page to github pages
          </div>
          <div className="col-md-4 tb-c">50 mins ago</div>
        </div>
        <div className="col-md-12 main-h">
          {" "}
          <div className="col-md-4 tb-c-pages">
            <i class="fa fa-file" aria-hidden="true"></i>Skills
          </div>
          <div className="col-md-4 tb-c">
            {" "}
            deploy kills Page to github pages
          </div>
          <div className="col-md-4 tb-c">1 day ago</div>
        </div>
        <div className="col-md-12 main-h">
          {" "}
          <div className="col-md-4 tb-c-pages">
            <i class="fa fa-file" aria-hidden="true"></i>Blog
          </div>
          <div className="col-md-4 tb-c">All Tech News</div>
          <div className="col-md-4 tb-c">5 days ago</div>
        </div>
        <div className="col-md-12 main-h">
          {" "}
          <div className="col-md-4 tb-c-pages">
            <i class="fa fa-file" aria-hidden="true"></i>Contact
          </div>
          <div className="col-md-4 tb-c">
            deploy Contact Page to github pages{" "}
          </div>
          <div className="col-md-4 tb-c">3 days ago</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
