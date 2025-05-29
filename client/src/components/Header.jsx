import '../App.css';
function Header() {
    return (
        <header className="header flex items-center py-4 px-6 bg-white rounded sticky top-0 shadow shadow-slate-50">
            <h1 className="header__title text-3xl font-bold">🚀 LaunchBase</h1>
            <div className="ml-auto">
                <button className="btn btn--primary">Sign In</button>
            </div>
        </header>
    );
}

export default Header;