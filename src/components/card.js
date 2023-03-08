import React from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
function About(props) {
  const posts = [
    {
     src:require('./images/hotel.jpg'),
    },
   ]
  return (
    <div style={{ marginTop: 20, padding: 30 }} className="Zoom">
      <Grid container spacing={40} justifyContent="center">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card>
              <CardActionArea style={{rowGap:100}}>
                <CardMedia
                  component="img"
                  alt="Hotel"
                  height="500"
                  image={post.src}
                  title="hotel"
                />
                {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent> */}
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default About;