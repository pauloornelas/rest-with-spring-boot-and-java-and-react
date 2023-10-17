import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./pages/Login";
import Books from "./pages/Books"
import NewBook from "./pages/NewBook"

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>}    path="/" exact/>
                <Route element={<Books/>}    path="/books" />
                <Route element={<NewBook/>}  path="/book/new/:bookId" />
            </Routes>
        </BrowserRouter>
    )
}