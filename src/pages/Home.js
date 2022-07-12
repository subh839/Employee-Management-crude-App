import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
function Home() {
  return (
    <>
    <div className="home">
      <div className="headerContainer">

        <h2> Office Solution </h2>
        <p> Solution To your Work </p>
        <Link to="/contact">
          <button>Let's Collaborate</button>
        </Link>
      </div>
    </div>
    <div className="whyus">
      
      <div className="whyusBottom">
       
            <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <p>
            <h2>Respect Client's Choice</h2>
            <h2>Project update on every step</h2>
            <h2>Handled Multiple Projects and Clients.</h2>
            </p>
          </div>
          </div>
      </section>
      
      </div>
    </div>
    </>
  );
}

export default Home;