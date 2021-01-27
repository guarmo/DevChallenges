import React, { Fragment, useState, useContext } from "react";
import PhotoContext from "../../context/photo/photoContext";

const Modal = () => {
  const photoContext = useContext(PhotoContext);
  const { addPhoto, setHideModal, showModal } = photoContext;

  const [formData, setFormData] = useState({
    label: "",
    url: "",
  });

  const { label, url } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newPhoto = {
      label,
      url,
    };

    addPhoto(newPhoto);

    setFormData({
      label: "",
      url: "",
    });
    setHideModal();
  };

  return (
    <Fragment>
      {showModal ? (
        <>
          <form className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl">Add a new photo</h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setHideModal()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div
                  onSubmit={(e) => onSubmit(e)}
                  style={{ minWidth: "400px" }}
                  className="relative p-6 flex-auto"
                >
                  <div className="flex flex-col mb-4">
                    <label
                      className="mb-2 text-lg text-grey-darkest"
                      htmlFor="first_name"
                    >
                      Label
                    </label>
                    <input
                      className="border py-2 px-3 text-grey-darkest rounded-lg"
                      type="text"
                      name="label"
                      value={label}
                      required
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label
                      className="mb-2 text-lg text-grey-darkest"
                      htmlFor="first_name"
                    >
                      Photo URL
                    </label>
                    <input
                      className="border py-2 px-3 text-grey-darkest rounded-lg"
                      type="text"
                      name="url"
                      value={url}
                      required
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-gray-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setHideModal()}
                    >
                      Cancel
                    </button>
                    <input
                      onClick={(e) => onSubmit(e)}
                      className="bg-green-500 text-white active:bg-green-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      value="Submit"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </Fragment>
  );
};

export default Modal;
