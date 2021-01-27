import React, { useContext, useEffect, Fragment } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GridItem from "./GridItem";
import PhotoContext from "../../context/photo/photoContext";

const Grid = () => {
  const photoContext = useContext(PhotoContext);

  const { getPhotos, photos, filtered } = photoContext;

  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {photos !== null ? (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          className="mt-8"
        >
          <Masonry gutter="25px">
            {filtered !== null
              ? filtered.map((image, i) => <GridItem image={image} key={i} />)
              : photos.map((image, i) => <GridItem image={image} key={i} />)}
          </Masonry>
        </ResponsiveMasonry>
      ) : (
        <h4>No photos</h4>
      )}
    </Fragment>
  );
};

export default Grid;
