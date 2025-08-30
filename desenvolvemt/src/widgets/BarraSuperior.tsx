import LogoGEIA from "@/components/LogoGEIA"
import LogoPJC from "@/components/LogoPJC"


const BarraSuperior = () =>{
    return(
        <>
            <div className="w-full flex flex-row items-center p-4  bg-gray-400">
                <LogoPJC/>
                <div className="container flex flex-col items-start p-4">
                    <h1 className="font-semibold">POLÍCIA JUDICIÁRIA CIVIL</h1>
                    <h3>Estado de Mato Grosso</h3>
                </div>
                <div className="flex flex-col">
                    <LogoGEIA/>
                    <h3 className="font-semibold px-2 py-1">SISTEMAS POLICIAIS</h3>
                </div>
            </div>
        </>
    )
}

export default BarraSuperior