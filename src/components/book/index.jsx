import React from 'react';
import HTMLFlipBook from "react-pageflip";
import './lorem'



const LeftSide = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="page"></div>
    );
});

const RightSide = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}className="page">
            <div data-lorem="1p"></div>
            <div data-lorem="20w"></div>
        </div>
    );
});

export function Book(props) {
  return (
      <div className="book-wrapper">
        <HTMLFlipBook 
            width={800} 
            height={1000}
            maxShadowOpacity={0.4}
            showCover={true}
        >
          <div className="page cover">Page 1</div>
          <LeftSide />
          <RightSide />
          <LeftSide />
          <RightSide />
          <LeftSide />
          <RightSide />

          {/* <div className="page cover">Page 19</div> */}
        </HTMLFlipBook>
      </div>
  );
}


