"use client";
import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";

const Page = forwardRef((props: { number: number; imageSrc: string }, ref: any) => {
  return (
    <div className="flipbook-page" ref={ref}>
      <img src={props.imageSrc} alt={`Page ${props.number}`} draggable="false" />
    </div>
  );
});
Page.displayName = "Page";

interface FlipbookProps {
  numPages: number;
}

export default function Flipbook({ numPages }: FlipbookProps) {
  const pages = Array.from({ length: numPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center w-full">
      {/* @ts-ignore */}
      <HTMLFlipBook 
        width={400} 
        height={565} 
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        usePortrait={true}
        className="mx-auto"
      >
        {pages.map((pageNumber) => (
          <Page 
            key={pageNumber} 
            number={pageNumber} 
            imageSrc={`/report/page_${pageNumber}.jpg`} 
          />
        ))}
      </HTMLFlipBook>
    </div>
  );
}
