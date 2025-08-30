import Link from "next/link"
import Image from "next/image"

const LogoPJC = () => {
    return(
        <>
            <Link href={"/"}>
                <Image
                src="/logo_pjc.svg"
                alt="Logo da PJC"
                width={60}
                height={78}
                />
            </Link>
        </>
    )
}

export default LogoPJC