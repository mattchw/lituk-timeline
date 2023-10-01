import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent, CardMedia, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { TimelineItem as TimelineItemType } from '../../constants/timelineItems';

interface Props {
  items?: TimelineItemType[]
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TimelineContainer({
  items = []
}: Props) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [expanded, setExpanded] = React.useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Timeline position={isMdUp ? "alternate" : "right"}
      sx={isMdUp ? {} : {
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.25,
        },
      }}
    >
      {
        items.map((item, index) => (
          <TimelineItem key={index} id={`item-${index}`}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align={index % 2 === 0 ? "right" : "left"}
              variant="body2"
              color="text.secondary"
            >
              {item.title}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={item.dotColor} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: 4, px: 2 }}>
              <Card sx={{ width: "100%" }}>
                {item.image && <CardMedia
                  sx={{
                    minHeight: isMdUp ? 400 : 250,
                  }}
                  image={item.image}
                  title={item.title}
                />}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.cardTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.cardDescription}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {item.items &&
                    <ExpandMore
                      expand={expanded === index}
                      onClick={() => handleExpandClick(index)}
                      aria-expanded={expanded === index}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>}
                </CardActions>
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <CardContent>
                    {item.items && (
                      <List>
                        {item.items.map((subItem, subIndex) => (
                          <ListItem key={subIndex}>
                            <ListItemText
                              primaryTypographyProps={{ variant: 'h6' }}
                              primary={subItem.title}
                              secondary={subItem.description}
                            />
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </CardContent>
                </Collapse>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  );
}
