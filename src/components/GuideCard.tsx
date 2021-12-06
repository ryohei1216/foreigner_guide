import * as React from "react";
//components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const GuideCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia component="img" alt={title} height="140" image={imageUrl} /> */}
      <CardContent>
        <Typography data-testid="title" variant="body2" color="text.secondary">
          {/* {title} */}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <a href={webUrl}>
          <Button size="small">Learn More</Button>
        </a>
      </CardActions> */}
    </Card>
  );
};
