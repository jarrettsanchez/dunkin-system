import React from "react";
import Link from "next/link";

const ImageHeader = () => {
  return (
    <header className="bg-light py-3">
      <div className="container d-flex justify-content-center">
        <Link href="/">
          <img
            src="https://static.mobi2go.com/images/205252-webp-thumbnail"
            alt="Logo"
            style={{ height: "10vh" }}
          />
        </Link>
      </div>
    </header>
  );
};

export default ImageHeader;
