import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export default function LavinCarousel(props: any) {
  return (
    <div className="flex justify-center">
      <Carousel variant="dark" indicators={false} controls={false}>
        <Carousel.Item>
          <Image
            className="mx-auto rounded-lg overflow-hidden"
            src="/lavin_pic_1.jpg"
            alt="Lavin Pic 1"
            width={800}
            height={800}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="mx-auto rounded-lg overflow-hidden"
            src="/lavin_pic_2.jpg"
            alt="Lavin Pic 2"
            width={800}
            height={800}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
