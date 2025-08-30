import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";

export default function Home() {
  return (
    <>
      <header className="w-full">
          <BarraSuperior/>
          <BarraPesquisa/>
      </header>
      <hr className="border-gray-200 my-6"/>
      <main className="container mx-auto border-2 border-red-500">

      </main>
      <footer>
        
      </footer>
    </>
  )
}