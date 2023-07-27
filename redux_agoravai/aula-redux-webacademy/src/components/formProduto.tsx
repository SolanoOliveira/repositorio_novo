import { useState } from "react";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import { AppDispatch } from "../redux/store";
import { addProduto } from "../redux/slices/api.slice.produtos";

export default function FormularioProduto() {
  const dispatch = useDispatch<AppDispatch>();

  const [inputProduto, SetProduto] = useState({
    nome: "",
    preco: 0,
    estoque: 0,
  });

  const handleInput = (e: any) => {
    SetProduto({ ...inputProduto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addProduto(inputProduto));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ff6b6b", // Pink background color
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Shadow effect
      }}
    >
      <h3 style={{ color: "#fff", marginBottom: "20px" }}>
        Inserir Novo Produto
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label" style={{ color: "#fff" }}>
            Nome
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control custom-input"
              name="nome"
              value={inputProduto.nome}
              onChange={handleInput}
              style={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label" style={{ color: "#fff" }}>
            Preço
          </label>
          <div className="col-md-8">
            <input
              type="number"
              className="form-control custom-input"
              name="preco"
              value={inputProduto.preco}
              onChange={handleInput}
              style={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label" style={{ color: "#fff" }}>
            Estoque
          </label>
          <div className="col-md-8">
            <input
              type="number"
              className="form-control custom-input"
              name="estoque"
              value={inputProduto.estoque}
              onChange={handleInput}
              style={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label"></label>
          <div className="col-md-8">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                borderRadius: "5px",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
