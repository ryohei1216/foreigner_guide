import * as React from "react";
import styled from "styled-components";
//components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  webUrl: string;
  imageUrl: string;
  title: string;
};

export const CountryCard: React.FC<Props> = ({ webUrl, imageUrl, title }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="140" image={imageUrl} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={webUrl}>
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
};
