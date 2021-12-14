import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getApiDomain } from "../utils/config";
import axios from "axios";
import styled from "styled-components";
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
import CircularLoading from "./common/CircularLoading";

type Props = {
  country: string;
};

export const CountriesCard: FC<Props> = ({ country }) => {
  const history = useHistory();
  const apiDomain = getApiDomain();
  const [isLoading, setIsLoading] = useStateSafe<boolean>(true);
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

  useEffect(() => {
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
      const wiki = await axios
        .get(`${apiDomain}/country_wiki?q=${country}`)
        .catch(() => {
          return loadFailedData;
        })
        .finally(() => {
          setIsLoading(false);
        });
      setWiki(wiki.data.wiki);
    };
    getWiki();
  }, [apiDomain, country, setIsLoading, setWiki]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      {isLoading && (
        <StyledCenter data-testid="loading">
          <CircularLoading />
        </StyledCenter>
      )}
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

const StyledCenter = styled.div`
  .MuiBox-root {
    margin: 0 43%;
  }
`;
