import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listitem.scss";

const Listitem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className='listitem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbfnm09jHFsVorcxVErVgqssBCebcGYa00Q&usqp=CAU'
        alt=''
      />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className = 'icon'/>
              <Add className = 'icon'/>
              <ThumbUpOutlined className = 'icon'/>
              <ThumbDownOutlined className = 'icon'/>
            </div>

            <div className='iteminfoTop'>
              <span>1 hour 25 mins</span>
              <span className='limit'>+16</span>
              <span>2020</span>
            </div>
            <div className='description'>Lorem ipsum dolor sit amet,</div>
            <div className='genre'>Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Listitem;
