import { Carousel } from "react-bootstrap";
import Image from "next/image";

export default function HackathonCarousel(props: any) {
  return (
    <div className="flex justify-center">
      <Carousel variant="dark" indicators={false} controls={false}>
        <Carousel.Item>
          <Image
            className="mx-auto rounded-lg overflow-hidden"
            src="/hackathon_1.jpg"
            alt="Hackathon Pic 1"
            width={600}
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="mx-auto rounded-lg overflow-hidden"
            src="/hackathon_2.jpg"
            alt="Hackathon Pic 2"
            width={594}
            height={594}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
