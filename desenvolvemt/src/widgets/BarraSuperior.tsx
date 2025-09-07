import LogoGEIA from "@/components/LogoGEIA"
import LogoPJC from "@/components/LogoPJC"

const BarraSuperior = () => {
  return (
    <div className="w-full flex items-center justify-between bg-gray-300 px-6 py-4 shadow-md">
      

      <div className="flex items-center gap-4">
        <LogoPJC/>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-800">POLÍCIA JUDICIÁRIA CIVIL</h1>
          <span className="text-sm text-gray-600">Estado de Mato Grosso</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <LogoGEIA/>
        <span className="font-semibold text-gray-700">SISTEMAS POLICIAIS</span>
      </div>

    </div>
  )
}

export default BarraSuperior
