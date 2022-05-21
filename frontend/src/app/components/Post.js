import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const navigate = useNavigate();

  const goToPost = () => {
    navigate(`/posts/${props.post.id}`, { replace: false });
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="mb-5">
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.post.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={goToPost}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
