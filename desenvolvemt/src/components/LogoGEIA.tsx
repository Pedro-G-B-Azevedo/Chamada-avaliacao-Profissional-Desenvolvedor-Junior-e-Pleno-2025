import Link from "next/link"
import Image from "next/image"

const LogoGEIA = () => {
    return(
        <>
            <Link href={"/"}>
                <Image
                src="/logo_geia.svg"
                alt="Logo da PJC"
                width={190}
                height={30}
                />
            </Link>
        </>
    )
}

export default LogoGEIA