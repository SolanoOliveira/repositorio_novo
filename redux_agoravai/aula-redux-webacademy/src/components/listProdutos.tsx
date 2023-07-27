import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button } from "reactstrap";
import { addProdutoNome } from "../redux/slices/carrinho.slice";
import { RootState } from "../redux/store";

export default function ProdutosList() {
  const dispatch = useDispatch();

  const { produtos } = useSelector((state: RootState) => state.apiProduto);
  const { isAdmin } = useSelector((state: RootState) => state.apiLogin);

  function inserirCarrinho(name: string) {
    dispatch(addProdutoNome(name));
  }

  return (
    <div
      style={{ backgroundColor: "#ff99cc", padding: "20px", marginTop: "20px" }}
    >
      {isAdmin ? (
        <table className="table table-responsive table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
              <th scope="col">Estoque</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr key={produto.id}>
                <th scope="row">{index + 1}</th>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
                <td>{produto.estoque}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="row">
          {produtos.map((produto, index) => (
            <div key={produto.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{produto.nome}</h5>
                  <p className="card-text">Preço: R$ {produto.preco}</p>
                  <p className="card-text">Estoque: {produto.estoque}</p>
                  <Button onClick={() => inserirCarrinho(produto.nome)}>
                    Inserir no Carrinho
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
