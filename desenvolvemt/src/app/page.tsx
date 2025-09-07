"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import BotaoFiltro, { Filtros } from "@/components/BotaoFiltro";
import { getPessoas } from "@/services/apiService";
import type { Pessoa, PessoasResponse } from "@/types/api";
import dynamic from 'next/dynamic';

const DynamicPessoasDesaparecidas = dynamic(
  () => import('@/widgets/PessoasDesaparecidas'),
);

export default function Home() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filtros, setFiltros] = useState<Filtros>({});

  const searchParams = useSearchParams();
  const busca = searchParams.get("busca") || "";

  useEffect(() => {
    const fetchPessoas = async () => {
      setLoading(true);
      try {
        const data: PessoasResponse = await getPessoas(0, 50);

        let filtradas: Pessoa[] = data.content;

        if (busca) {
          filtradas = filtradas.filter((p) =>
            p.nome.toLowerCase().includes(busca.toLowerCase())
          );
        }
        if (filtros.idadeMin !== undefined) {
          filtradas = filtradas.filter((p) => p.idade >= filtros.idadeMin!);
        }
        if (filtros.idadeMax !== undefined) {
          filtradas = filtradas.filter((p) => p.idade <= filtros.idadeMax!);
        }

        if (filtros.sexo) {
          filtradas = filtradas.filter((p) => p.sexo === filtros.sexo);
        }

        if (filtros.vivo !== undefined) {
          filtradas = filtradas.filter((p) => p.vivo === filtros.vivo);
        }

        setPessoas(filtradas);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPessoas();
  }, [busca, filtros]);

  return (
    <>
      <header className="w-full flex flex-col items-center">
        <BarraSuperior />
        <div className="flex items-center w-full max-w-2xl mx-auto mt-4">
          <BarraPesquisa />
          <BotaoFiltro onAplicar={setFiltros} />
        </div>
      </header>
      <hr className="border-gray-200 my-6" />
      <main className="container mx-auto">
        {loading ? (
          <p>Carregando pessoas desaparecidas...</p>
        ) : pessoas.length > 0 ? (
          <DynamicPessoasDesaparecidas pessoas={pessoas} />
        ) : (
          <p>Nenhuma pessoa encontrada.</p>
        )}
      </main>
      <footer></footer>
    </>
  );
}
