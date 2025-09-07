"use client";

import { useState } from "react";
import { postInfoDesaparecido } from "@/services/apiService";
import type { InfoDesaparecido } from "@/types/api";

export default function FormularioInformacoes() {
  const [localizacao, setLocalizacao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data, setData] = useState("");
  const [anexos, setAnexos] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMensagem("");

    try {
      const partes = data.split("/");
      const dataISO =
        partes.length === 3
          ? `${partes[2]}-${partes[1]}-${partes[0]}`
          : data;

      const anexosArray = anexos
        ? Array.from(anexos).map((file) => file.name)
        : [];

      const payload: Omit<InfoDesaparecido, "id"> = {
        ocoId: 0, 
        informacao: `Local: ${localizacao}, Telefone: ${telefone}`,
        data: dataISO,
        anexos: anexosArray,
      };

      await postInfoDesaparecido(payload);

      setMensagem("Informações enviadas com sucesso!");
      setLocalizacao("");
      setTelefone("");
      setData("");
      setAnexos(null);
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao enviar informações. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white shadow rounded-2xl p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Enviar novas informações</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium">
            Localização Avistada
          </label>
          <input
            type="text"
            placeholder="Digite o local"
            className="w-full mt-1 border rounded-lg p-2"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Telefone para contato
          </label>
          <input
            type="tel"
            placeholder="(99) 99999-9999"
            className="w-full mt-1 border rounded-lg p-2"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Data do avistamento
          </label>
          <input
            type="text"
            placeholder="dd/mm/aaaa"
            className="w-full mt-1 border rounded-lg p-2"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Anexar fotos</label>

          <label
            htmlFor="fotos"
            className="inline-block cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Selecionar arquivos
          </label>

          <input
            id="fotos"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => setAnexos(e.target.files)}
          />

          <p className="text-sm text-gray-500 mt-2">
            Você pode selecionar várias fotos
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar informações"}
        </button>
      </form>

      {mensagem && (
        <p className="mt-4 text-sm font-medium text-center">{mensagem}</p>
      )}
    </section>
  );
}
