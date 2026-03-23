"use client";

import type { SlideData } from "@/data/types";
import VideoBackground from "./VideoBackground";
import SlideContent from "./SlideContent";

interface SlideProps {
  data: SlideData;
  active: boolean;
  index: number;
  onReady?: () => void;
  onNext?: () => void;
}

export default function Slide({ data, active, index, onReady, onNext }: SlideProps) {
  return (
    <div className="slide">
      <div className="slide-frame">
        <VideoBackground
          video={data.media.video}
          poster={data.media.poster}
          active={active}
          onReady={onReady}
          overlayStyle={data.overlayStyle}
        />
        <SlideContent
          data={data}
          active={active}
          index={index}
          onNext={onNext}
        />
      </div>
    </div>
  );
}
