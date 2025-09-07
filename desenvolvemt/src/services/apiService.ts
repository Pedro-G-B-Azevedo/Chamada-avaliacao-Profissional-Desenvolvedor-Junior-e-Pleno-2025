import axios from "axios";
import type { Pessoa, PessoasResponse, InfoDesaparecido} from "@/types/api";


const api = axios.create({
  baseURL: "https://abitus-api.geia.vip",
});

export async function getPessoas(page = 0, size = 10): Promise<PessoasResponse> {
  const { data } = await api.get<PessoasResponse>("/v1/pessoas/aberto/filtro", {
    params: { page, size },
  });
  return data;
}

export async function getPessoaById(id: number): Promise<Pessoa> {
  const { data } = await api.get<Pessoa>(`/v1/pessoas/${id}`);
  return data;
}

export async function postInfoDesaparecido(
  info: Omit<InfoDesaparecido, "id">
): Promise<InfoDesaparecido> {
  const { data } = await api.post<InfoDesaparecido>(
    "/v1/infos-desaparecido",
    info
  );
  return data;
}