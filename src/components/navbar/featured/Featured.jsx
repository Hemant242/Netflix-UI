import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name='genre' id='genre'>
            <option> Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='crime'>Crime</option>
            <option value='comedy'>Comedy</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}
      <img
        src='https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt=''
      />

      <div className='info'>
        {/* <img
          src=""
          alt=''
        /> */}
        <span className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>

          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
