import React from "react";
import { useProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function HomeCard({ el }: any) {
  const { deleteProduct } = useProductContext();
  const nav = useNavigate();

  return (
    <div>
      <h1>{el.name}</h1>
      <h2>{el.price}</h2>
      <img src={el.image} alt="" />
      <button onClick={() => deleteProduct(el.id)}>delete</button>
      <button onClick={() => nav(`/edit/${el.id}`)}>edit</button>
    </div>
  );
}
