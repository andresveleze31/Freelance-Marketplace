import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { GiCycle } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FF5f00" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FF5f00" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow className="rounded-full" />,
  prevArrow: <SamplePrevArrow className="rounded-full" />,
};

function Gig() {
  const { id } = useParams();
  console.log(id);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    newRequest.get(`/api/gigs/single/${id}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
      setError(false);
    });

    

    console.log(data);
  }, []);

  return (
    <>
      <Banner name={"Service Details"} />

      {isLoading ? (
        <div className="contenedor">
          <h2 className="font-bold">Loading...</h2>
        </div>
      ) : (
        <main className="contenedor mb-[5rem] ">
          <div className="grid grid-cols-[2fr,1fr] gap-[5rem] ">
            <div>
              <p className="text-lightGray">PROHIRE - GRAPHICS & DESIGN</p>
              <h2 className="font-bold">
                {isLoading ? "Loading..." : data.title}
              </h2>
              <div className="flex gap-[2rem] items-center ">
                <img
                  className="w-[5rem] cursor-pointer object-cover h-[5rem] rounded-full "
                  src={"../../public/img/profile.jpg"}
                  alt="Image Profile"
                />
                <p className="font-bold">John Doe</p>

                <div className="flex gap-[0.5rem]">
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                </div>
              </div>

              <Slider
                className="w-[70rem] mt-[2rem] mb-[5rem] rounded-2xl  "
                {...settings}
              >
                {isLoading ? (
                  <img
                    className=" object-cover rounded-2xl"
                    src="../../public/img/gig-1.jpg"
                    alt="Gig Img"
                  />
                ) : (
                  data.images.map((img) => (
                    <img
                      className=" object-cover rounded-2xl"
                      key={img}
                      src={img}
                      alt="Gig Img"
                    />
                  ))
                )}
              </Slider>

              <div>
                <h3 className="font-bold">About this Gig</h3>
                <p className="text-lightGray leading-[3rem]">
                  {isLoading ? "Loading" : data.desc}
                </p>
              </div>

              <div>
                <h3 className="font-bold mt-[2rem] ">About The Seller</h3>
                <div className="flex gap-[2rem] items-center ">
                  <img
                    className="w-[10rem] h-[10rem] cursor-pointer object-cover  rounded-full "
                    src="../../public/img/profile.jpg"
                    alt="Image Profile"
                  />
                  <div className="flex flex-col gap-[1rem] ">
                    <p className="font-bold">John Doe</p>

                    <div className="flex gap-[0.5rem]">
                      <FaStar size={15} color="#fec810" />
                      <FaStar size={15} color="#fec810" />
                      <FaStar size={15} color="#fec810" />
                      <FaStar size={15} color="#fec810" />
                      <FaStar size={15} color="#fec810" />
                    </div>

                    <button className="bg-primary text-white py-[1rem] px-[2rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 ">
                      Contact Me
                    </button>
                  </div>
                </div>
                <div className="p-[2rem] mt-[5rem]  border rounded-xl ">
                  <div className="grid grid-cols-2 gap-[3rem]">
                    <div>
                      <p className="text-lightGray">From</p>
                      <p className="font-bold">USA</p>
                    </div>
                    <div>
                      <p className="text-lightGray">Member Since</p>
                      <p className="font-bold">Aug 2022</p>
                    </div>
                    <div>
                      <p className="text-lightGray">Avg Response Time</p>
                      <p className="font-bold">4 hours</p>
                    </div>
                    <div>
                      <p className="text-lightGray">Last Delivery</p>
                      <p className="font-bold">1 day</p>
                    </div>
                    <div>
                      <p className="text-lightGray">Languages</p>
                      <p className="font-bold">English</p>
                    </div>
                  </div>
                  <div className="border-t my-[2rem] ">
                    <p className="text-lightGray mt-[2rem]  leading-[3rem]">
                      Brandy Digital Marketing Agency Website UI Kit will help
                      your Digital Marketing Agency services. Came with clean
                      and professional style, you can easily edit and customize
                      all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[1rem]  ">
                <h3 className="font-bold mt-[2rem] ">Reviews</h3>

                <div>
                  <div className="flex gap-[2rem] items-center ">
                    <img
                      className="w-[5rem] cursor-pointer object-cover h-[5rem] rounded-full "
                      src="../../public/img/profile.jpg"
                      alt="Image Profile"
                    />

                    <div className="flex flex-col gap-[.5rem] ">
                      <p className="font-bold">John Doe</p>
                      <div className="flex gap-[1rem] ">
                        <LiaFlagUsaSolid size={25} />
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[0.5rem]">
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                </div>
                <p className="text-lightGray leading-[3rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit ex architecto perferendis iure tempore tenetur libero
                  similique, laudantium laborum aut, eos vitae velit sunt vel
                  adipisci est expedita totam possimus! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <div className="flex gap-[2rem] border-b pb-[4rem] my-[2rem] ">
                  <p className="font-bold">Helpful?</p>
                  <div className="flex gap-[1rem] items-center">
                    <AiOutlineLike />
                    <p className="font-bold">Yes</p>
                  </div>
                  <div className="flex gap-[1rem] items-center">
                    <AiOutlineDislike />
                    <p className="font-bold">No</p>
                  </div>
                </div>

                <div>
                  <div className="flex gap-[2rem] items-center ">
                    <img
                      className="w-[5rem] cursor-pointer object-cover h-[5rem] rounded-full "
                      src="../../public/img/profile.jpg"
                      alt="Image Profile"
                    />

                    <div className="flex flex-col gap-[.5rem] ">
                      <p className="font-bold">John Doe</p>
                      <div className="flex gap-[1rem] ">
                        <LiaFlagUsaSolid size={25} />
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[0.5rem]">
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                </div>
                <p className="text-lightGray leading-[3rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit ex architecto perferendis iure tempore tenetur libero
                  similique, laudantium laborum aut, eos vitae velit sunt vel
                  adipisci est expedita totam possimus! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <div className="flex gap-[2rem] border-b pb-[4rem] my-[2rem] ">
                  <p className="font-bold">Helpful?</p>
                  <div className="flex gap-[1rem] items-center">
                    <AiOutlineLike />
                    <p className="font-bold">Yes</p>
                  </div>
                  <div className="flex gap-[1rem] items-center">
                    <AiOutlineDislike />
                    <p className="font-bold">No</p>
                  </div>
                </div>

                <div>
                  <div className="flex gap-[2rem] items-center ">
                    <img
                      className="w-[5rem] cursor-pointer object-cover h-[5rem] rounded-full "
                      src="../../public/img/profile.jpg"
                      alt="Image Profile"
                    />

                    <div className="flex flex-col gap-[.5rem] ">
                      <p className="font-bold">John Doe</p>
                      <div className="flex gap-[1rem] ">
                        <LiaFlagUsaSolid size={25} />
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[0.5rem]">
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                  <FaStar size={15} color="#fec810" />
                </div>
                <p className="text-lightGray leading-[3rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit ex architecto perferendis iure tempore tenetur libero
                  similique, laudantium laborum aut, eos vitae velit sunt vel
                  adipisci est expedita totam possimus! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <div className="flex gap-[2rem] border-b pb-[4rem] my-[2rem] ">
                  <p className="font-bold">Helpful?</p>
                  <div className="flex gap-[1rem] items-center">
                    <AiOutlineLike />
                    <p className="font-bold">Yes</p>
                  </div>
                  <div className="flex gap-[1rem] items-center">
                    <AiOutlineDislike />
                    <p className="font-bold">No</p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="">
              <div className="border  rounded-xl p-[2rem] sticky top-[2rem] ">
                <div className="flex justify-between">
                  <h4 className="font-bold">
                    {isLoading ? "Loading..." : data.shortTitle}
                  </h4>
                  <h4>${isLoading ? "Loading..." : data.price} </h4>
                </div>
                <p className="text-lightGray mt-[1rem] leading-[2.5rem]">
                  {isLoading ? "Loading..." : data.shortDesc}
                </p>
                <div className="flex justify-between mt-[2rem]  ">
                  <div className="flex gap-[1rem] items-center ">
                    <IoTimeOutline size={25} />
                    <p className="font-bold">
                      {isLoading ? "Loading..." : data.deliveryTime} days
                      Delivery
                    </p>
                  </div>
                  <div className="flex gap-[1rem] items-center ">
                    <GiCycle size={25} />
                    <p className="font-bold">
                      {isLoading ? "Loading..." : data.revisionNumber} Revisions
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[1rem] mt-[2rem] ">
                  {isLoading
                    ? "Loading..."
                    : data.features.map((feature) => (
                        <div
                          className="flex gap-[1rem] items-center"
                          key={feature.id}
                        >
                          <FaCheck color="#FF5f00" />
                          <p className="text-lightGray">{feature}</p>
                        </div>
                      ))}
                </div>

                <button className="bg-primary w-full mt-[2rem] text-white py-[1rem] px-[2rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 ">
                  Continue
                </button>
              </div>
            </aside>
          </div>
        </main>
      )}
    </>
  );
}

export default Gig;
