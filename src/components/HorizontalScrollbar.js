import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography, Stack } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const breakPoints=[
  {width: 500, itemsToShow: 1},
  {width: 768, itemsToShow: 2},
  {width: 1200, itemsToShow: 3},
  {width: 1500, itemsToShow: 4}
]
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '100px', xs: '0px' } }} justifyContent="flex-start center" flexWrap="wrap" alignItems="center">
    {data?.slice(0, 11)?.map((item) => (
      <div
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </div>
    ))}
  </Stack>
);

export default HorizontalScrollbar;