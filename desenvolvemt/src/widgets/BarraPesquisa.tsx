import { IconSearch } from "@/assets/icones"

const BarraPesquisa = () =>{
    return(
        <div className="my-5 border-2 border-gray-200 flex items-center rounded-full px-3 py-2 w-full max-w-2xl mx-auto shadow-lg shadow-gray-200 overflow-clip">
                <input
                    type="text"
                    placeholder="Buscar por pessoa desaparecida..."
                    className="w-full"
                />
                <button className="bg-black rounded-full p-2">
                    <IconSearch
                        aria-label="Pesquisa"
                        size={20}
                        color="white"
                    />
                </button>
            </div>
    )
}

export default BarraPesquisa