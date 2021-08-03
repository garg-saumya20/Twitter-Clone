import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post() {

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1269641579494547457/rIyu37XA_400x400.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Saumya Garg
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />
                                @SaumyaG07268675
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p></p>
                    </div>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RkCY1Kc33aftNEwuXaCDo13mqBH9pK-ohQ&usqp=CAU" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}


export default Post;