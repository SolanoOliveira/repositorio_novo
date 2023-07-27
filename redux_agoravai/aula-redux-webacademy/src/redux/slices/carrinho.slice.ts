// redux/slices/carrinho.slice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CarrinhoState {
  produtos: { nome: string; quantidade: number }[];
}

const initialState: CarrinhoState = {
  produtos: [],
};

const carrinhoSlice = createSlice({
  name: "carrinhoSlice",
  initialState,
  reducers: {
    addProdutoNome: (state, action: PayloadAction<string>) => {
      const nome = action.payload;
      const produtoNoCarrinho = state.produtos.find((p) => p.nome === nome);
      if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade++;
      } else {
        state.produtos.push({ nome, quantidade: 1 });
      }
    },
    // Adicione também a ação para remover produtos do carrinho
    removeProdutoNome: (state, action: PayloadAction<string>) => {
      const nome = action.payload;
      const produtoNoCarrinho = state.produtos.find((p) => p.nome === nome);
      if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade--;
        if (produtoNoCarrinho.quantidade <= 0) {
          state.produtos = state.produtos.filter((p) => p.nome !== nome);
        }
      }
    },
  },
});

export const { addProdutoNome, removeProdutoNome } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;

export const selectCarrinhoItems = (state: RootState) =>
  state.carrinho.produtos;
