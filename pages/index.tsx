import Carousel from '../components/carousel';
import Navbar from '../components/navbar';

const images = [
  'https://cdn.pixabay.com/photo/2016/07/05/16/53/leaves-1498985__340.jpg',
];

export default function Home() {
  return (
    <>
      <div className="relative">
        <Carousel>
          {images.map((image) => (
            <div key={image} className="relative h-screen">
              <img src={image} className="h-full brightness-75" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold text-white">KRUNGTHEP KERA</h1>
                <hr className="w-1/4 my-3 border border-white" />
                <p className="text-3xl font-medium text-white">ศูนย์เช่ายืมอุปกรณ์กีฬา @สนามกีฬาแห่งชาติ</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <Navbar />
      </div>
    </>
  );
}
