import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import AppContextProvider from "./context/AppContext"
import CartContextProvider from "./context/CartContext"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {
	return (
		<>
			<AppContextProvider>
				<CartContextProvider>
					<BrowserRouter>
						<NavBar />
						<Routes>
							<Route
								path="/"
								element={<ItemListContainer greetings={"Goye Shop"} />}
							/>
							<Route
								path="/category/:categoryId"
								element={<ItemListContainer greetings={"Goye Shop"} />}
							/>
							<Route path="/item/:id" element={<ItemDetailContainer />} />
							{/* <Route path="/cart" element={<Cart />} /> */}
						</Routes>
					</BrowserRouter>
				</CartContextProvider>
			</AppContextProvider>
		</>
	)
	
}

export default App
