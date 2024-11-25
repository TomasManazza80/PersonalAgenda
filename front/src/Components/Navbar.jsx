
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
function Navbar(){

    const{isAuthenticated,logout,user}=useAuth();
    return(
        <nav className="bg-white/50 my-3 flex justify-between py-5 px-10 rounded-lg rounded-full">
            <Link to={
                isAuthenticated ? "/tasks":"/"
            }>
                <h1 className="text-2xl text-white font-bold">Gestor Tareas</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                    <li>
                        Bienvenido {user.username}
                    </li>
                    <li>
                        <Link to='/add-task'
                        className="bg-indigo-500 px-4 py-1 rounded-sm">Agrega una tarea</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={()=>{
                            logout();
                        }}>Cerrar Sesión</Link>
                    </li>
                    </>
                ):(
                    <>
                    <li>
                        <Link to='/login'
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full wh-20">Inicio Sesión</Link>
                    </li>
                    <li>
                        <Link to='/register'
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Registro</Link>
                    </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;