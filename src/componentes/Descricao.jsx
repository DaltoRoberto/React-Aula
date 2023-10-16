import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
// import api from "../_service/api";
import api_v2 from "../_service/api_v2";
import { CardProduto } from "./CardProduto";

function Descricao() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      // const response = await api.get("/productlistbyremark/home");
      const response = await api_v2.get("/products/products.json");
      setProdutos(response.data);
    } catch (error) {
      mensagemDeErro("Erro para buscar os produtos.");
    }
  }

  function mensagemDeErro(mensagem = "Mensagem de erro") {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <>
      <Row>
        {produtos.map((produto, index) => {
          return (
            <Col className="m-2" key={index}>
              <CardProduto
                idProduto={produto.id}
                nome={produto.title}
                preco={produto.price}
                linkImagem={produto.image}
                descricao={produto.category}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export { Descricao };
