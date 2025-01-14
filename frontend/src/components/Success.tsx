import Link from "next/link";

const SuccessComponent = () => {
  return (
    <div className="home-btn-container">
      <div className="button-wrapper">
        <h4>Your order will be ready for pickup shortly.</h4>
        <br />
        <br />
        <Link href={"/order"} className="btn btn-lg button-or">
          Make Another Order
        </Link>
        <br />
        <br />
        <Link href={"/"} className="btn btn-lg button-pk">
          Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessComponent;
