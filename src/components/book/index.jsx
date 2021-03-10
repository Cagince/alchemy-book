import React from 'react';
import HTMLFlipBook from "react-pageflip";
import { makeMagicCircle } from './generator';
import './lorem'


const $ = window.$;

const LeftSide = React.forwardRef((props, ref) => {

    const parent = $('<div></div>');
    makeMagicCircle(parent)

    
    return (
        <div ref={ref} className="page symbol-container-wrapper">
            <div className="flex-wrapper">


            <div className="symbol-container" dangerouslySetInnerHTML={{__html: parent.html() }}/>

            <div>


            <br />
            <b>
                <div data-lorem="1-5w"></div>
            </b>
            <br />
            {/* <div data-lorem="30w"></div> */}
            <div data-lorem="1p"></div>
            </div>
            </div>
            
        </div>
    );
});

const RightSide = React.forwardRef((props, ref) => {
    const parent = $('<div></div>');
    makeMagicCircle(parent)


    return (
        <div ref={ref} className="page">
            <div className="flex-wrapper">
            <div>

            <b>

                <div data-lorem="1-5w"></div>
            </b>
            <div data-lorem="1p"></div>
            <div data-lorem="20w"></div>
            </div>
            <div className="symbol-container" dangerouslySetInnerHTML={{__html: parent.html() }}/>
            </div>
        </div>
    );
});



const Cover = React.forwardRef((props, ref) => {

    return (
        <div ref={ref} className="page cover">
            <div className="logo"></div>
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
            <Cover />
          <LeftSide />
          <RightSide />
          <LeftSide />
          <RightSide />
          <LeftSide />
          <RightSide />
          <LeftSide />
          <RightSide />
          <LeftSide />
          <RightSide />
          <LeftSide />
          <RightSide />
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


