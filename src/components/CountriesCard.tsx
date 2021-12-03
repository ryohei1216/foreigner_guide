import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getApiDomain } from "../utils/config";
import axios from "axios";
//components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { setConstantValue } from "typescript";

type Props = {
  country: string;
};

export const CountriesCard: FC<Props> = ({ country }) => {
  const history = useHistory();
  const apiDomain = getApiDomain();
  const [wiki, setWiki] = useState<any>();

  const jumpCountryPage = (country: string) => {
    history.push(`/country/${country}`);
  };

  useEffect(() => {
    axios.get(`${apiDomain}/country_wiki?q=${country}`).then((res) => {
      console.log(res.data.wiki);
      setWiki(res.data.wiki);
    });
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="National Flag"
        height="140"
        image={wiki && wiki.thumbnail.url}
      />
      <CardContent>
        <Typography
          data-testid="country"
          gutterBottom
          variant="h5"
          component="div"
        >
          {country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {wiki && wiki.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => jumpCountryPage(country)} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
