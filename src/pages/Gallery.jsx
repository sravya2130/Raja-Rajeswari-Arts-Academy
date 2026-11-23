import "./Gallery.css";

import gallery1 from "./assets/pic1.jpeg";
import gallery2 from "./assets/pic2.jpeg";
import gallery3 from "./assets/pic3.jpeg";
import gallery4 from "./assets/pic4.jpeg";
import gallery5 from "./assets/pic5.jpeg";
import gallery6 from "./assets/pic6.jpeg";
import gallery7 from "./assets/pic7.jpeg";
import gallery8 from "./assets/pic8.jpeg";
import gallery9 from "./assets/pic9.jpeg";
import gallery10 from "./assets/pic10.jpeg";
import gallery11 from "./assets/pic11.jpeg";
import gallery12 from "./assets/pic12.jpeg";
import gallery13 from "./assets/pic13.jpeg";
import gallery14 from "./assets/pic14.jpeg";
import gallery15 from "./assets/pic15.jpeg";
import gallery16 from "./assets/pic16.jpeg";
import gallery17 from "./assets/pic17.jpeg";
import gallery18 from "./assets/pic18.jpeg";
import gallery19 from "./assets/pic19.jpeg";
import gallery20 from "./assets/pic20.jpeg";
import gallery21 from "./assets/pic21.jpeg";
import gallery22 from "./assets/pic22.jpeg";
import gallery23 from "./assets/pic23.jpeg";
import gallery24 from "./assets/pic24.jpeg";
import gallery25 from "./assets/pic25.jpeg";
import gallery26 from "./assets/pic26.jpeg";
import gallery27 from "./assets/pic27.jpeg";
import gallery28 from "./assets/pic28.jpeg";
import gallery29 from "./assets/pic29.jpeg";
import gallery30 from "./assets/pic30.jpeg";
import gallery31 from "./assets/pic31.jpeg";
import gallery32 from "./assets/pic32.jpeg";
import gallery33 from "./assets/pic33.jpeg";
import gallery34 from "./assets/pic34.jpeg";
import gallery35 from "./assets/pic35.jpeg";
import gallery36 from "./assets/pic36.jpeg";
import gallery37 from "./assets/pic37.jpeg";
import gallery38 from "./assets/pic38.jpeg";
import gallery39 from "./assets/pic39.jpeg";
import gallery40 from "./assets/pic40.jpeg";
import gallery41 from "./assets/pic41.jpeg";
import gallery42 from "./assets/pic42.jpeg";
import gallery43 from "./assets/pic43.jpeg";
import gallery44 from "./assets/pic44.jpeg";
import gallery45 from "./assets/pic45.jpeg";
import gallery46 from "./assets/pic46.jpeg";
import gallery47 from "./assets/pic47.jpeg";
import gallery48 from "./assets/pic48.jpeg";
import gallery49 from "./assets/pic49.jpeg";
import gallery50 from "./assets/pic50.jpeg";
import gallery51 from "./assets/pic51.jpeg";
import gallery52 from "./assets/pic52.jpeg";
import gallery53 from "./assets/pic53.jpeg";
import gallery54 from "./assets/pic54.jpeg";
import gallery55 from "./assets/pic55.jpeg";
import gallery56 from "./assets/pic56.jpeg";
import gallery57 from "./assets/pic57.jpeg";
import gallery58 from "./assets/pic58.jpeg";
import gallery59 from "./assets/pic59.jpeg";

function Gallery() {

  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
    gallery19,
    gallery20,
    gallery21,
    gallery22,
    gallery23,
    gallery24,
    gallery25,
    gallery26,
    gallery27,
    gallery28,
    gallery29,
    gallery30,
    gallery31,
    gallery32,
    gallery33,
    gallery34,
    gallery35,
    gallery36,
    gallery37,
    gallery38,
    gallery39,
    gallery40,
    gallery41,
    gallery42,
    gallery43,
    gallery44,
    gallery45,
    gallery46,
    gallery47,
    gallery48,
    gallery49,
    gallery50,
    gallery51,
    gallery52,
    gallery53,
    gallery54,
    gallery55,
    gallery56,
    gallery57,
    gallery58,
    gallery59,
  ];

  return (

    <div className="gallery-page">

      <div className="gallery-header">

        <h1>
          Our Performances
        </h1>

        <p>
          Beautiful moments from RR Arts Academy
        </p>

      </div>

      <div className="gallery-grid-page">

        {images.map((img, index) => (

          <div className="gallery-card-page" key={index}>

            <img src={img} alt="" />

          </div>

        ))}

      </div>

    </div>
  );
}

export default Gallery;