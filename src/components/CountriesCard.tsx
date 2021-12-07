import React, { FC, useEffect, useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { getApiDomain } from "../utils/config";
import axios from "axios";
import { useStateSafe } from "../hooks/useStateSafe";
//types
import { wikiData } from "../../types";
//components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  country: string;
};

export const CountriesCard: FC<Props> = ({ country }) => {
  const history = useHistory();
  const apiDomain = getApiDomain();
  const initialWikiData: wikiData = {
    description: "",
    thumbnail: {
      url: "",
    },
  };
  const [wiki, setWiki] = useStateSafe<wikiData>(initialWikiData);
  const jumpCountryPage = (country: string) => {
    history.push(`/country/${country}`);
  };

  const loadFailedData = {
    data: {
      wiki: {
        description: "読み込み失敗",
        thumbnail: {
          url: "https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png",
        },
      },
    },
  };

  const getWiki = async () => {
    const wikiData = await axios
      .get(`${apiDomain}/country_wiki?q=${country}`)
      .catch(() => {
        return loadFailedData;
      });
    return wikiData;
  };

  useEffect(() => {
    let componentMounted = true;
    const setGetWiki = async () => {
      const wiki = await getWiki();
      if (componentMounted) {
        setWiki(wiki.data.wiki);
      }
    };
    setGetWiki();
    return () => {
      componentMounted = false;
    };
  }, [country]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        data-testid="media"
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
        <Typography
          data-testid="description"
          variant="body2"
          color="text.secondary"
        >
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
