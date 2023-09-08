import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

import {formatDistance} from "../../helpers/formatDistance";


export const BlogCard = ( { poster, tag, name, avatar, title, description, postedAt}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardPoster
            src={poster}
            alt={tag}
          />
        </CardHeader>
        <CardBody>
          <Tag>{tag}</Tag>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <UserBox>
            <Avatar src={avatar} alt={name} />
            <UserInfo>
              <UserName>{name}</UserName>
              <Date>{formatDistance(postedAt)}</Date>
            </UserInfo>
          </UserBox>
        </CardFooter>
      </Card>
    </>
  )
};
