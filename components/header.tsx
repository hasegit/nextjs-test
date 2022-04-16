import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-green-300 w-screen">
            <nav>
                <ul className="flex items-center pl-4 h-14">
                    <li className="hover:bg-green-600 p-2 rounded"><Link href="/">Home</Link></li>
                    <li className="hover:bg-green-600 p-2 rounded"><Link href="/blogs">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
