import Head from "next/head"
import Header from "./header"

type LayoutProps = {
    children: any,
    title?: string
}

const Layout = ({ children, title = "HP" }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <div>{children}</div>
        </>
    )

}
export default Layout
