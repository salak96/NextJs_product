 import Navbar from "../Navbar";
type AppShellProps = {
    Children: React.ReactNode
}
const AppShell = (props : AppShellProps) => {
    const {Children} = props
    return (
        <main>
            <Navbar />
            {Children}
        </main>
    );
}
export default AppShell;