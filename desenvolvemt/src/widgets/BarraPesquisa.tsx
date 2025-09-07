"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconSearch } from "@/assets/icones";

const BarraPesquisa = () => {
  const [termo, setTermo] = useState("");
  const router = useRouter();

  const handleSearch = () => {

    router.push(`/?busca=${encodeURIComponent(termo)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="my-5 border-2 border-gray-200 flex items-center rounded-full px-3 py-2 w-full max-w-2xl mx-auto shadow-lg shadow-gray-200 overflow-clip">
      <input
        type="text"
        placeholder="Buscar por pessoa desaparecida..."
        className="w-full"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="bg-black rounded-full p-2" onClick={handleSearch}>
        <IconSearch aria-label="Pesquisa" size={20} color="white" />
      </button>
    </div>
  );
};

export default BarraPesquisa;
