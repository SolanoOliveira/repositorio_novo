import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, NavbarBrand } from "reactstrap";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/api.slice.login";
import { Nav, NavItem, NavLink } from "reactstrap";
import { selectCarrinhoItems } from "../redux/slices/carrinho.slice";

export default function NavBarCustom() {
  const navigate = useNavigate();
  const { isAdmin } = useSelector((state: RootState) => state.apiLogin);
  const dispatch = useDispatch();

  const produtosNoCarrinho = useSelector(selectCarrinhoItems);

  // Calcular a quantidade total no carrinho
  const quantidadeTotalNoCarrinho = produtosNoCarrinho.reduce(
    (total, produto) => total + produto.quantidade,
    0
  );

  function Logout() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#ff1493",
          borderBottom: "2px solid #ccc",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        light
        expand="md"
      >
        <NavbarBrand style={{ color: "#fff", fontWeight: "bold" }}>
          Loja Online
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              style={{
                color: "#fff",
                fontSize: "16px",
                textTransform: "uppercase",
                marginRight: "20px",
              }}
              onClick={() => navigate("/home")}
            >
              Produtos
            </NavLink>
          </NavItem>

          {!isAdmin ? (
            <NavItem>
              <NavLink
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  marginRight: "20px",
                }}
                onClick={() => navigate("/cart")}
              >
                Carrinho ({quantidadeTotalNoCarrinho})
              </NavLink>
            </NavItem>
          ) : null}

          <NavItem>
            <NavLink
              style={{
                color: "#fff",
                fontSize: "16px",
                textTransform: "uppercase",
              }}
              onClick={() => Logout()}
            >
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
