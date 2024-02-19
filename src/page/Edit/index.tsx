import React, { useEffect, useState } from "react";
import "../Admin/index.scss";
import { useProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

export default function Edit() {
  const { onProduct, getProducts, editProduct } = useProductContext();
  const { id } = useParams();
  //   const [inputValue, setInputValue] = useState<object>({
  //     name: "",
  //     price: "",
  //     image: "",
  //   });
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getProducts(id);
  }, []);
  console.log(onProduct);

  useEffect(() => {
    if (onProduct) {
      setName(onProduct.name);
      setPrice(onProduct.price);
      setImage(onProduct.image);
    }
  }, [onProduct]);

  function edit() {
    const editedProduct = {
      name: name,
      price: price,
      image: image,
    };
    editProduct(id, editedProduct);
  }
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin-inputs">
            <input
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              type="text"
              placeholder="name"
            />
            <input
              value={price}
              onChange={(e: any) => setPrice(e.target.value)}
              type="text"
              placeholder="price"
            />
            <input
              value={image}
              onChange={(e: any) => setImage(e.target.value)}
              type="text"
              placeholder="url"
            />
            <button onClick={edit}>create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
