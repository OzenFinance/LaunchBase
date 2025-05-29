import '../App.css';
import Header from './Header';

function MainPage() {
    return (
        <>
            <Header />
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow">
                <div className="p-6">
                    <h2 className="text-center text-2xl font-bold">Welcome</h2>
                    <p className="text-center text-gray-500 mt-3">
                        Sign in to your account or create a new one
                    </p>
                </div>



            </div>
        </div>
        </>
    );
}

export default MainPage; 