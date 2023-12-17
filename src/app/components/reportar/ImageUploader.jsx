"use client";
import React from "react";
import Image from "next/image";
import imageLoader from "../../../public/imageLoader.png";

function ImageUploader({
  index,
  images,
  headerTitle,
  handleLoadImage,
  handleImageChange,
  inputRef,
}) {

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleImageChange(file, index)
  };

  return (
    <div className="pt-2">
      <h4>
        {headerTitle}: <span className="text-red-700">*</span>
      </h4>
      <div className="py-1" onClick={() => handleLoadImage(index)}>
        <Image
          className={`cursor-pointer h-auto ${images[index] !== null && images[index] !== undefined ? 'w-32' : 'w-16'}`}
          src={
            images[index] !== null && images[index] !== undefined
              ? URL.createObjectURL(images[index])
              : imageLoader
          }
          width={60}
          height={60}
          alt={images[index] !== null && images[index] !== undefined ? `imagen_${headerTitle}` : `loader_image`}
        />
        <input
          type="file"
          ref={inputRef}
          onChange={handleFileInputChange}
          accept="image/*"
          capture
          className="hidden"
        />
      </div>
    </div>
  );
}

export default ImageUploader;
