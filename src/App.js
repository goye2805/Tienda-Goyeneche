import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import AppContextProvider from "./context/AppContext"
import CartContextProvider from "./context/CartContext"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { Cart } from "./components/Cart/Cart"
import NavBar from "./components/NavBar/NavBar"
import ProductoFB from "./components/ProductoFB/ProductoFB"

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
							
							<Route path="/cart" element={<Cart />} />

							<Route path="/firebase" element={<ProductoFB />} />
						</Routes>
					</BrowserRouter>
				</CartContextProvider>
			</AppContextProvider>
		</>
	)
	
}

export default App
