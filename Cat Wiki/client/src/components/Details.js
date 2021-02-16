import React, { useContext, useEffect } from "react";
import CatsContext from "../context/cats/catsContext";
import { Link } from "react-router-dom";

const Details = () => {
  const catsContext = useContext(CatsContext);
  const {
    queried,
    getImage,
    image,
    getImages,
    images,
    addToSearched,
  } = catsContext;

  const {
    id,
    reference_image_id,
    name,
    description,
    temperament,
    origin,
    life_span,
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly,
  } = queried[0];

  useEffect(() => {
    getImage(reference_image_id);
    addToSearched(queried[0]);
    getImages(id);
  }, []);

  return (
    <div className="min-h-screen">
      <Link className="text-sm" to="/">
        <i className="fas fa-long-arrow-alt-left"></i> Back
      </Link>
      <div className="flex md:flex-row flex-col items-center md:items-start mt-4">
        <div className="relative w-1/4">
          <div className="absolute"></div>
          <img className="detailsImg" src={image} alt="" />
        </div>
        <div className="md:px-20 w-3/4">
          <h1 className="text-4xl">{name}</h1>
          <p>{description}</p>
          <p className="my-4">
            <span className="font-bold">Temperament:</span> {temperament}
          </p>
          <p className="my-4">
            <span className="font-bold">Origin:</span> {origin}
          </p>
          <p className="my-4">
            <span className="font-bold">Life Span:</span> {life_span}
          </p>

          <div className="flex flex-col items-start sm:items-center sm:flex-row my-4">
            <span className="font-bold w-1/4">Adaptability:</span>
            <div className="flex sm:ml-6 ml-0 w-3/4">
              <div
                className={`w-12 h-3  rounded-lg ${
                  adaptability === 0 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  adaptability === 1 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  adaptability <= 2 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  adaptability <= 3 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  adaptability <= 4 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-center sm:flex-row my-4">
            <span className="font-bold w-1/4">Affection level:</span>
            <div className="flex sm:ml-6 ml-0 w-3/4">
              <div
                className={`w-12 h-3  rounded-lg ${
                  affection_level === 0 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  affection_level === 1 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  affection_level <= 2 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  affection_level <= 3 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  affection_level <= 4 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-center sm:flex-row my-4">
            <span className="font-bold w-1/4">Child friendly:</span>
            <div className="flex sm:ml-6 ml-0 w-3/4">
              <div
                className={`w-12 h-3  rounded-lg ${
                  child_friendly === 0 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  child_friendly === 1 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  child_friendly <= 2 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  child_friendly <= 3 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  child_friendly <= 4 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-center sm:flex-row my-4">
            <span className="font-bold w-1/4">Grooming:</span>
            <div className="flex sm:ml-6 ml-0 w-3/4">
              <div
                className={`w-12 h-3  rounded-lg ${
                  grooming === 0 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  grooming === 1 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  grooming <= 2 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  grooming <= 3 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  grooming <= 4 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-center sm:flex-row my-4">
            <span className="font-bold w-1/4">Intelligence:</span>
            <div className="flex sm:ml-6 ml-0 w-3/4">
              <div
                className={`w-12 h-3  rounded-lg ${
                  intelligence === 0 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  intelligence === 1 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  intelligence <= 2 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  intelligence <= 3 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  intelligence <= 4 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-center sm:flex-row my-4">
            <span className="font-bold w-1/4">Health issues:</span>
            <div className="flex sm:ml-6 ml-0 w-3/4">
              <div
                className={`w-12 h-3  rounded-lg ${
                  health_issues === 0 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  health_issues === 1 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  health_issues <= 2 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  health_issues <= 3 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  health_issues <= 4 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-center sm:flex-row my-4">
            <span className="font-bold w-1/4">Social needs:</span>
            <div className="flex sm:ml-6 ml-0 w-3/4">
              <div
                className={`w-12 h-3  rounded-lg ${
                  social_needs === 0 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  social_needs === 1 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  social_needs <= 2 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  social_needs <= 3 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  social_needs <= 4 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-center sm:flex-row my-4">
            <span className="font-bold w-1/4">Stranger friendly:</span>
            <div className="flex sm:ml-6 ml-0 w-3/4">
              <div
                className={`w-12 h-3  rounded-lg ${
                  stranger_friendly === 0 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  stranger_friendly === 1 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  stranger_friendly <= 2 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  stranger_friendly <= 3 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
              <div
                className={`w-12 h-3 rounded-lg ml-1 ${
                  stranger_friendly <= 4 ? "bg-gray-400" : "bg-black"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl">Other photos</h1>
        <div
          style={{ gridTemplateRows: "1fr min-content" }}
          className="grid gap-4 sm:grid-cols-4 grid-cols-2 sm:my-8 my-4"
        >
          {images &&
            images.map((image, index) => (
              <img
                key={index}
                style={{
                  maxHeight: "180px",
                  minHeight: "180px",
                  width: "100%",
                }}
                className="rounded-2xl mb-2"
                src={image}
                alt=""
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
