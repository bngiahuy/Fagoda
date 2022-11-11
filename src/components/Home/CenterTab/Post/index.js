import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";
import More from "assets/Home/CenterTab/moreTour.png";
import filledStar from "assets/Home/CenterTab/filledStar.png";
import emptyStar from "assets/Home/CenterTab/emptyStar.png";
import upVote from "assets/Home/CenterTab/upvote.png";
import downVote from "assets/Home/CenterTab/downvote.png";
import Vote from "assets/Home/CenterTab/vote.png";
import Comment from "assets/Home/CenterTab/comment.png";
import Share from "assets/Home/CenterTab/share.png";
import Report from "assets/Home/CenterTab/report.png";
import Liked from "assets/Home/CenterTab/liked.png";
import Like from "assets/Home/CenterTab/like.png";
import { fontWeight } from "@mui/system";

export const Post = ({ post }) => {
  const buttonMenu = [
    { content: "Bình chọn", url: Vote },
    { content: "Đánh giá", url: Comment },
    { content: "Chia sẻ", url: Share },
    { content: "Báo cáo", url: Report }
  ];

  return (
    <div className="postNF">
      <img alt="img" src={post.url} className="imagePostNF" />
      <div className="contentNF">
        <span className="titlePostNF">[{post.title}]</span> <br />
        <span className="contentPostNF">{post.content}</span><br />
        <span className="hashtagPostNF">{post.hashtag.map((item) => `#${item} `)}</span>
        <div className="tourPostNF">
          <div className="infoTourPostNF">
            {post.tour.map((item) =>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start"
                }}
              >
                <div>
                  Tour {item.day} ngày {item.night} đêm - Khởi hành: {item.start} - Phương tiện: {item.vehicle}
                </div>
                <div>
                  Giá: {item.price}
                </div>
              </Button>
            )}
          </div>
          <img alt="more" src={More} className="imageFilter" />
        </div>

        <div className="companyPostNF">
          <div className="infoCompanyPostNF">
            <Avatar alt={post.company} src={post.avatar} sx={{ width: 40, height: 40 }} />
            <div>
              <span className="titlePostNF">{post.company}</span><br />
              <span className="timePostNF">{post.time}</span>
            </div>
          </div>
          <div className="starPostNF">
            {post.star.map((item) =>
              <img alt="filledStar" src={item ? filledStar : emptyStar} className="imageKeyword" />
            )}
          </div>
        </div>

        <div className="reactPostNF">
          <div className="voteFramePostNF">
            <span className="contentPostNF">{post.upvote}</span>
            <img alt="filledStar" src={upVote} className="votePostNF" />
            <span className="contentPostNF">{post.downvote}</span>
            <img alt="emptyStar" src={downVote} className="votePostNF" />
          </div>
          <span className="contentPostNF">{post.numComment} đánh giá</span>
        </div>

        <div className="buttonMenuPostNF">
          {buttonMenu.map((item) =>
            <Button
              startIcon={<img alt={item.content} src={item.url} className="imageKeyword" />}
              style={{
                textTransform: "none",
                fontSize: "12px",
                color: "black",
                fontWeight: "bold",
              }}
              fullWidth
            >
              {item.content}
            </Button>
          )}
        </div>

        {post.comment.map((item) =>
          <div className="commentPostNF">
            <div className="contentCommentPostNF">
              <Avatar alt={item.name} src={item.url} sx={{ marginRight: "10px", width: 25, height: 25 }} />
              <div>
                <span className="titlePostNF">{item.name}</span> <br />
                <span className="infoContentCommentPostNF">{item.content}</span>
              </div>
            </div>
            <div className="reactCommentPostNF">
              <div className="childReactCommentPostNF">
                {item.star}&nbsp;<img alt="filledStar" src={filledStar} className="votePostNF" />
              </div>
              <div className="childReactCommentPostNF"  >
                {item.like}
                <IconButton>
                  <img alt="filledStar" src={item.isLiked ? Liked : Like} className="votePostNF" />
                </IconButton>
              </div>
            </div>
          </div>)}

        <div className="moreCommentPostNF">
          <div>
            Xem thêm đánh giá
          </div>
          <div>
            2/{post.numComment}
          </div>
        </div>
      </div>
    </div >
  );
};