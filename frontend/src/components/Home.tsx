import Link from "next/link";

const HomeComponent = () => {
  return (
    <div className="home-btn-container">
      <div className="button-wrapper">
        <Link href={"/order"} className="btn btn-lg button-or">
          Create Order
        </Link>
      </div>
    </div>
  );
};

export default HomeComponent;
