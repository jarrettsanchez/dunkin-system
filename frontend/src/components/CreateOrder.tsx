import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Order, DefaultEmptyOrder } from "./Order";
import { PRODUCTS } from "./products.constant";

const CreateOrderComponent = () => {
  const navigate = useRouter();

  const [order, setOrder] = useState<Order>(DefaultEmptyOrder);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [selectedFlavour, setSelectedFlavour] = useState<string | null>(null); // for single donut
  const [selectedFlavours, setSelectedFlavours] = useState<string[]>([]); // for multiple donuts

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleProductChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const productName = event.target.value;
    setSelectedProduct(productName);
    const product = PRODUCTS.find((p) => p.name === productName);
    if (product) {
      setProductPrice(product.price); // update product price when product is selected
      setSelectedFlavour(null); // reset for radio buttons
      setSelectedFlavours([]); // reset for checkboxes
    } else {
      setProductPrice(0);
    }
  };

  const handleFlavourChange = (event: ChangeEvent<HTMLInputElement>) => {
    const flavour = event.target.value;
    if (selectedProduct === "Single Donut") {
      // For radio buttons
      setSelectedFlavour(flavour);
    } else {
      // For checkboxes
      if (selectedFlavours.includes(flavour)) {
        setSelectedFlavours(selectedFlavours.filter((f) => f !== flavour));
      } else {
        setSelectedFlavours([...selectedFlavours, flavour]);
      }
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // update order object with selected product
    const updatedOrder = {
      ...order,
      items: [
        {
          product: selectedProduct, // add selected product to order
          price: productPrice,
          flavours:
            selectedProduct === "Single Donut"
              ? selectedFlavour
              : selectedFlavours, // add selected flavours to order
        },
      ],
    };

    console.log(updatedOrder);

    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedOrder),
    })
      .then((res) => {
        console.log(res);
        setOrder(DefaultEmptyOrder);
        setSelectedProduct(""); // reset product selection after submission
        setProductPrice(0); // reset product price
        setSelectedFlavours([]);
        navigate.push("/success");
      })
      .catch((err) => {
        console.log("Error from CreateOrder: " + err);
      });
  };

  const selectedProductData = PRODUCTS.find((p) => p.name === selectedProduct);

  return (
    <div className="CreateOrder container mt-5">
      <form noValidate onSubmit={onSubmit}>
        <div className="row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="fname" className="form-label">
              First Name <span className="required">*</span>
            </label>
            <input
              id="fname"
              type="text"
              placeholder="John"
              name="fname"
              className="form-control"
              value={order.fname}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              id="lname"
              type="text"
              placeholder="Doe"
              name="lname"
              className="form-control"
              value={order.lname}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="email" className="form-label">
              Email <span className="required">*</span>
            </label>
            <input
              id="email"
              type="text"
              placeholder="john.doe@gmail.com"
              name="email"
              className="form-control"
              value={order.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="mobile_number" className="form-label">
              Mobile Number <span className="required">*</span>
            </label>
            <input
              id="mobile_number"
              type="text"
              placeholder="0123456789"
              name="mobile_number"
              className="form-control"
              value={order.mobile_number}
              onChange={onChange}
              required
            />
          </div>
        </div>

        {/* Product Selection Dropdown */}
        <div className="row mb-3">
          <div className="form-group col-md-12">
            <label htmlFor="productSelect" className="form-label">
              Select Product <span className="required">*</span>
            </label>
            <select
              id="productSelect"
              name="product"
              className="form-control"
              value={selectedProduct}
              onChange={handleProductChange}
              required
            >
              <option value="">Select a product</option>
              {PRODUCTS.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Flavours Selection with Checkboxes */}
        {selectedProductData && selectedProductData.flavours.length > 0 && (
          <div className="row mb-3">
            <label className="form-label">Select Flavours</label>
            <div className="d-flex flex-wrap">
              {selectedProductData.flavours.map((flavour, index) => (
                <div
                  key={flavour}
                  className="form-check col-4"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    type={
                      selectedProduct === "Single Donut" ? "radio" : "checkbox"
                    }
                    id={`flavour-${index}`}
                    name="flavour"
                    value={flavour}
                    className="form-check-input"
                    onChange={handleFlavourChange}
                    checked={
                      selectedProduct === "Single Donut"
                        ? selectedFlavour === flavour
                        : selectedFlavours.includes(flavour)
                    }
                  />
                  <label
                    htmlFor={`flavour-${index}`}
                    className="form-check-label ms-2"
                  >
                    {flavour}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Special Requests Textbox */}
        <div className="form-group">
          <label htmlFor="special_requests" className="form-label">
            Special Requests
          </label>
          <input
            id="special_requests"
            type="text"
            placeholder="Please let us know if you have any dietary requirements or special requests (e.g., allergies, vegetarian, gluten-free)."
            name="special_requests"
            className="form-control"
            value={order.special_requests}
            onChange={onChange}
          />
        </div>
        <br />

        {/* Make Order Button with Price */}
        <div className="submit-details-btn">
          <button
            type="submit"
            className="btn button-or btn-block mt-4 mb-4 w-25 d-flex justify-content-between align-items-center"
            disabled={
              !order.fname ||
              !order.email ||
              !order.mobile_number ||
              !selectedProduct
            }
          >
            Make Order
            {/* price displayed far right inside the button */}
            {productPrice > 0 && (
              <span className="product-price">${productPrice.toFixed(2)}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrderComponent;
