export default function Header() {
    return (
        <div className="navbar bg-primary shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Yamine Daroueche</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}