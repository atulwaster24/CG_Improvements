'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

const Masonry = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Modal.setAppElement(document.getElementById('__next'));
    }
  }, []);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  // Flattening the 2D array (arrays within arrays) into a single array
  const flattenedImages = images?.flat();

  return (
    <div>
      <div className="grid bg-stone-100 p-10 rounded-lg gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {flattenedImages?.map((src, index) => (
          <div
            key={index}
            className="relative group w-full h-[300px] min-h-[300px] overflow-hidden rounded-lg border-4 hover:border-white hover:shadow-2xl transition-transform duration-500 ease-in-out"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={720}
              height={300}
              className="object-cover object-top w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-35 transition-opacity duration-500 ease-in-out"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <button
                onClick={() => openModal(src)}
                className="bg-white font-semibold text-black px-4 py-2 rounded-md shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
              >
                Read Article
              </button>
            </div>

            {/* Persistent icon for mobile indicating the image is clickable */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none lg:hidden">
              <span className="text-white text-lg font-semibold bg-black border-2 border-white bg-opacity-50 px-3 py-1 rounded-full">
                Tap to View
              </span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {selectedImage && (
          <div className="flex flex-col items-center justify-center">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={1200}
              height={800}
              className="rounded-lg"
            />
            <button
              onClick={closeModal}
              className="mt-4 bg-white font-semibold text-blue-500 border-2 border-blue-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Close
            </button>
          </div>
        )}
      </Modal>

      <style jsx global>{`
        .modal-overlay {
          background: rgba(0, 0, 0, 0.75);
          position: fixed;
          top: 10%;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 90%;
          max-height: 90%;
          overflow: auto;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Masonry;
