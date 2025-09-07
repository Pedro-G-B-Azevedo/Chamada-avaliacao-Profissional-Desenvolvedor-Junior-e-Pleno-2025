"use client";

import type { Pessoa } from "@/types/api";
import Link from "next/link";
import Image from "next/image";
import PessoaDesaparecida from "@/components/PessoaDesaparecida";

interface Props {
  pessoas: Pessoa[];
}

export default function PessoasDesaparecidas({ pessoas }: Props) {
  return (
    <section  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-6">
      {pessoas.map((item, indice) => (
        <div key={indice}>
          <Link href={`/pessoas/${item.id}`}>
            <PessoaDesaparecida
              nome={item.nome}
              idade={item.idade}
              sexo={item.sexo}
              vivo={item.vivo}
              ultimaOcorrencia={item.ultimaOcorrencia}
            >
              <Image
                className="w-full aspect-square object-cover rounded-xl"
                src={item.urlFoto || "/sem-foto.png"}
                alt={item.nome}
                width={300}
                height={300}
              />
            </PessoaDesaparecida>
          </Link>
        </div>
      ))}
    </section>
  );
}
