import { getPessoaById } from "@/services/apiService";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import FormularioInformacoes from "@/widgets/FormularioInformacoes";
import PessoaCardDetalhes from "@/widgets/PessoaCardDetalhes";

interface PageProps {
  id: number;
}

export default async function Page({ params }: { params: Promise<PageProps> }) {
  const { id } = await params;
  const pessoa = await getPessoaById(id);

  return (
    <>
      <header className="w-full">
        <BarraSuperior />
        <BarraPesquisa />
      </header>
      <hr className="border-gray-200 my-6" />
      <main className="container mx-auto space-y-6">
        <PessoaCardDetalhes pessoa={pessoa} />
        <FormularioInformacoes />
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        
      </footer>
    </>
  );
}