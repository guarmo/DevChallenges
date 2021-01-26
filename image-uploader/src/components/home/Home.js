import React, { useCallback, Fragment } from "react";
import { storage } from "../../firebase/firebase";
import image from "../../assets/image.svg";
import homeStyles from "./home.css";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";

const Home = ({
  imageAsFile,
  setImageAsFile,
  setImageAsUrl,
  setLoading,
  setError,
}) => {
  const handleImageAsFile = (e) => {
    const image = e[0];
    setImageAsFile(image);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      handleImageAsFile(acceptedFiles);
    },
    [handleImageAsFile]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleFirebaseUpload = (e) => {
    e.preventDefault();

    if (imageAsFile.type === "image/png" || imageAsFile.type === "image/jpg") {
      setLoading(true);
      const uploadTask = storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);

      //initiates the firebase side uploading
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (err) => {
          setError("There's been an issue. Please try again");
        },
        () => {
          storage
            .ref("images")
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              setImageAsUrl((prevObject) => ({
                ...prevObject,
                imgUrl: fireBaseUrl,
              }));
            });
        }
      );
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setError("Please upload a JPG or PNG file");

      setTimeout(() => {
        setImageAsFile("");
        setError(null);
      }, 3000);
    }
  };

  return (
    <div style={{ homeStyles }} className="card">
      <h6 className="text-bg">Upload your image</h6>
      <h6 className="text-md sub-h">File should be Jpeg, Png...</h6>

      <div {...getRootProps()} className="box">
        <input {...getInputProps()} onChange={onDrop} />
        <Fragment>
          <img src={image} alt="" />
          <h6 className="text-sm dropHeading">
            Drag & Drop your image here...
          </h6>
        </Fragment>
      </div>

      <span className="text-sm or">Or</span>

      <form onSubmit={handleFirebaseUpload}>
        {imageAsFile === "" && (
          <Fragment>
            <label
              htmlFor="file-upload"
              className="btn btn-choose"
              className={imageAsFile !== "" ? "btn-hide" : "btn btn-choose"}
            >
              Choose a file
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={(e) => handleImageAsFile(e.target.files)}
            />
          </Fragment>
        )}
        {imageAsFile !== "" && (
          <button className="btn btn-choose">Upload</button>
        )}
      </form>
    </div>
  );
};

Home.propTypes = {
  setImageAsFile: PropTypes.func.isRequired,
  setImageAsUrl: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Home;
