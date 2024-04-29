import React from "react";
import styled from "styled-components";

const TopicDetailContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const TopicDetailHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TopicTitle = styled.h2`
  margin-bottom: 10px;
`;

const TopicContent = styled.p`
  margin-bottom: 20px;
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 20px;
`;

const CommentAuthor = styled.div`
  font-weight: bold;
`;

const CommentContent = styled.div`
  margin-top: 5px;
`;

export default function TopicDetailScreen({ topic }) {
  return (
    <TopicDetailContainer>
      <TopicDetailHeader>
        <TopicTitle>{topic.title}</TopicTitle>
        <TopicContent>{topic.content}</TopicContent>
      </TopicDetailHeader>
      <CommentList>
        {topic.comments.map((comment, index) => (
          <CommentItem key={index}>
            <CommentAuthor>{comment.author}</CommentAuthor>
            <CommentContent>{comment.content}</CommentContent>
          </CommentItem>
        ))}
      </CommentList>
    </TopicDetailContainer>
  );
}
