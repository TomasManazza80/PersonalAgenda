import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 my-3 flex justify-between items-center py-4 px-8 shadow-lg rounded-full">
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <h1 className="text-3xl text-white font-extrabold">Personal Agenda</h1>
      </Link>
      <ul className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <li className="text-white text-lg">
              Bienvenido {user.username}
            </li>
            <li>
              <Link
                to="/add-task"
                className="bg-indigo-400 hover:bg-indigo-300 text-white px-4 py-2 rounded-full transition-all duration-300"
              >
                Agrega una tarea
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
                className="bg-red-400 hover:bg-red-300 text-white px-4 py-2 rounded-full transition-all duration-300"
              >
                Cerrar Sesión
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
              >
                Inicio Sesión
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
              >
                Registro
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
