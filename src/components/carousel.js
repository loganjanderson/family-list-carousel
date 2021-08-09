const Carousel = (props) => {
  const rightScroll = (e) => {
    e.target.parentElement.children[1].scrollLeft += props.scrollDistance;
  };

  const leftScroll = (e) => {
    e.target.parentElement.children[1].scrollLeft -= props.scrollDistance;
  };

  return (
    <>
      <h3>{props.headerText}</h3>
      <div className="carousel-wrapper">
        <h1
          onClick={leftScroll}
          style={{
            color: props.arrowColor || "grey"
          }}
        >
          {"<"}
        </h1>
        <div className="carousel">{props.imageSource}</div>
        <h1
          onClick={rightScroll}
          style={{
            color: props.arrowColor
          }}
        >
          {">"}
        </h1>
      </div>
    </>
  );
};

export default Carousel;
