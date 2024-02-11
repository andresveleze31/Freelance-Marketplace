import React from "react";

function Add() {
  return (
    <div className="contenedor mb-[5rem] ">
      <h2 className="font-bold">Add New Gig </h2>

      <form className="grid grid-cols-2 gap-[5rem] " action="">
        <div>
          <div className="flex flex-col my-[2rem] ">
            <label className="font-bold mb-[1rem]" htmlFor="title">
              Title
            </label>
            <input
              className="py-[1rem] px-[2rem] border border-customBlack "
              type="text"
              name="title"
              id="title"
              placeholder="e.g. I will do something Im really good at"
            />
          </div>
          <div className="flex flex-col my-[2rem] ">
            <label className="font-bold mb-[1rem] " htmlFor="cat">
              Category
            </label>
            <select
              className="py-[1rem] px-[2rem] border border-customBlack "
              name="cat"
              id="cat"
            >
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
          </div>

          <div className="flex flex-col my-[2rem] ">
            <label className="font-bold mb-[1rem]" htmlFor="title">
              Cover Image
            </label>
            <input type="file" />
          </div>
          <div className="flex flex-col my-[2rem] ">
            <label className="font-bold mb-[1rem]" htmlFor="title">
              Upload Images
            </label>
            <input type="file" />
          </div>

          <div className="flex flex-col my-[2rem] ">
            <label className="font-bold mb-[1rem]" htmlFor="title">
              Description
            </label>
            <textarea
              className="py-[1rem] px-[2rem] border border-customBlack "
              name=""
              id=""
              placeholder="Brief description to introduce your service to customers"
              cols="30"
              rows="16"
            ></textarea>{" "}
          </div>

          <input
            className="bg-primary text-white py-[1rem] w-full  hover:bg-customBlack cursor-pointer transition-all duration-300 "
            type="submit"
            value={"Create"}
          />
        </div>

        <div>
          <div className="flex flex-col my-[2rem] ">
            <label className="font-bold mb-[1rem]" htmlFor="title">
              Service Title
            </label>
            <input
              className="py-[1rem] px-[2rem] border border-customBlack "
              type="text"
              name="title"
              id="title"
              placeholder="e.g. One page web design"
            />
          </div>

          <div className="flex flex-col my-[2rem] ">
            <label className="font-bold mb-[1rem]" htmlFor="title">
              Short Description
            </label>
            <textarea
              className="py-[1rem] px-[2rem] border border-customBlack "
              name=""
              id=""
              placeholder="Brief description of your service"
              cols="30"
              rows="6"
            ></textarea>{" "}
          </div>

          <div className="flex flex-col my-[2rem] ">
            <label className="font-bold mb-[1rem]" htmlFor="title">
              Delivery Time
            </label>
            <input
              className="py-[1rem] px-[2rem] border border-customBlack "
              type="number"
              name="title"
              id="title"
              placeholder="e.g. 3 days"
            />
          </div>
          <div className="flex flex-col my-[2rem] ">
            <label className="font-bold mb-[1rem]" htmlFor="title">
              Revision Number
            </label>
            <input
              className="py-[1rem] px-[2rem] border border-customBlack "
              type="number"
              name="title"
              id="title"
              placeholder="e.g. 5 revisions"
            />
          </div>

          <div className="flex flex-col my-[2rem] ">
            <label className="font-bold mb-[1rem]" htmlFor="title">
              Add Features
            </label>
            <div className="flex flex-col gap-[1rem] ">
              <input
                className="py-[1rem] px-[2rem] border border-customBlack "
                type="text"
                name="title"
                id="title"
                placeholder="e.g. page design"
              />
              <input
                className="py-[1rem] px-[2rem] border border-customBlack "
                type="text"
                name="title"
                id="title"
                placeholder="e.g. file uploading"
              />
              <input
                className="py-[1rem] px-[2rem] border border-customBlack "
                type="text"
                name="title"
                id="title"
                placeholder="e.g. hosting"
              />
              <input
                className="py-[1rem] px-[2rem] border border-customBlack "
                type="text"
                name="title"
                id="title"
                placeholder="e.g. setting up domain"
              />
            </div>

            <div className="flex flex-col my-[2rem] ">
              <label className="font-bold mb-[1rem]" htmlFor="title">
                Price
              </label>
              <input
                className="py-[1rem] px-[2rem] border border-customBlack "
                type="number"
                name="title"
                id="title"
                placeholder="e.g. $19.90"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Add;
