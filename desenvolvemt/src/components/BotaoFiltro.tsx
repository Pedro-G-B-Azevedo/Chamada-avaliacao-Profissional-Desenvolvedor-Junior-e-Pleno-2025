"use client";

import { useState } from "react";
import Modal from "./Modal";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";

export interface Filtros {
  idadeMin?: number;
  idadeMax?: number;
  sexo?: "MASCULINO" | "FEMININO";
  vivo?: boolean;
}

interface BotaoFiltroProps {
  onAplicar: (filtros: Filtros) => void;
}

const BotaoFiltro = ({ onAplicar }: BotaoFiltroProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [idadeMin, setIdadeMin] = useState<string>("");
  const [idadeMax, setIdadeMax] = useState<string>("");
  const [sexo, setSexo] = useState<"MASCULINO" | "FEMININO" | "">("");
  const [vivo, setVivo] = useState<boolean | "">("");

  const handleAplicar = () => {
    const filtros: Filtros = {
      idadeMin: idadeMin !== "" ? Number(idadeMin) : undefined,
      idadeMax: idadeMax !== "" ? Number(idadeMax) : undefined,
      sexo: sexo || undefined,
      vivo: vivo === "" ? undefined : vivo,
    };
    onAplicar(filtros);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="ml-2 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"
        onClick={() => setIsOpen(true)}
      >
        <IconAdjustmentsHorizontal aria-label="Ícone Filtros" size={30} />
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Filtros">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Idade mínima</label>
            <input
              type="text"
              value={idadeMin}
              onChange={(e) => setIdadeMin(e.target.value)}
              className="w-full border px-2 py-1 rounded"
              placeholder="Ex: 18"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Idade máxima</label>
            <input
              type="text"
              value={idadeMax}
              onChange={(e) => setIdadeMax(e.target.value)}
              className="w-full border px-2 py-1 rounded"
              placeholder="Ex: 60"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Sexo</label>
            <select
              value={sexo}
              onChange={(e) => setSexo(e.target.value as "MASCULINO" | "FEMININO" | "")}
              className="w-full border px-2 py-1 rounded"
            >
              <option value="">Todos</option>
              <option value="MASCULINO">Masculino</option>
              <option value="FEMININO">Feminino</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Localizado</label>
            <select
              value={vivo === true ? "true" : vivo === false ? "false" : ""}
              onChange={(e) => {
                const val = e.target.value;
                setVivo(val === "" ? "" : val === "true");
              }}
              className="w-full border px-2 py-1 rounded"
            >
              <option value="">Todos</option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleAplicar}
          >
            Aplicar filtros
          </button>
        </div>
      </Modal>
    </>
  );
};

export default BotaoFiltro;
