import Bookings from "../components/Bookings";
import banner from "../images/indian-museum1.jpg";
import Navbar from "../components/Navbar";

const MyBookings = () => {
  return (
    <>
      <Navbar />
      <div
        className=" bg-cover bg-no-repeat bg-center h-[250px] flex flex-col justify-center items-center z-10 "
        style={{
          backgroundImage: `url(${banner})`,
          //   filter: `brightness(70%)`,
        }}
      >
        <h1 className=" text-white font-bold text-5xl text-center m-auto">
          Your Bookings
        </h1>
      </div>
      <main className="py-12 max-w-7xl container mx-auto px-4">
        <div className="container mx-auto">
          <h2 className="mb-5 text-2xl font-bold">Bookings</h2>
          <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
            <div className="space-y-6 md:w-full">
              <Bookings />
              <Bookings />
              <Bookings />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyBookings;
