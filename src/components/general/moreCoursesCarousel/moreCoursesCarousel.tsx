import Carousel from "./carousel/carousel";

export default function moreCoursesCarousel() {
  return (
    <>
      <div className="container mx-auto font-palanquin text-orange py-6 px-8 lg:px-4">
        <h3 className="text-h-md md:text-h-lg  ">Weitere Kurse</h3>
        <p className="text-p-lg md:text-h-md !font-normal">
          Wir haben noch viele weitere spannende Kurse im Angebot
        </p>
      </div>

      <Carousel />
    </>
  );
}
