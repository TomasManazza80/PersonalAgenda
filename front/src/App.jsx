import { BrowserRouter, Routes,Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import TasksPage from "./Pages/TasksPage";
import TaskFormPage from "./Pages/TaskFormPage";
import ProfilePage from "./Pages/ProfilePage";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./Context/TasksContext";
import Navbar from "./Components/Navbar";

import Bgvideo from './media/videoplayback.mp4'


function App(){
  return(
    <div>
  
    <AuthProvider class='landing'>
      
      <TaskProvider>
      
      <BrowserRouter>

        <main>
         
   
       
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          
           <Route element={<ProtectedRoute/>}>
            <Route path='/tasks' element={<TasksPage/>}/>
            <Route path='/add-task' element={<TaskFormPage/>}/>
            <Route path='/tasks/:id' element={<TaskFormPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Route>
          </Routes> 
          </main>

      </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
    </div>
  )
}

export default App