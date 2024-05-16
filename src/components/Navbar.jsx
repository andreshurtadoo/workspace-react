import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bg-stone-950 text-white p-4 flex justify-between items-center">
            <Link
                to="/"
                className="text-white text-lg hover:text-gray-300"
            >
                Home
            </Link>

            <ul className="flex gap-x-2 text-slate-800">
                <li>
                    <Link to="/about" className="text-white hover:text-gray-300 px-2">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/products" className="text-white hover:text-gray-300 px-2">
                        Products
                    </Link>
                </li>
            </ul>
        </div>
    );
}