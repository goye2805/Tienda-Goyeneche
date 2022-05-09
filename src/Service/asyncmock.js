const products = [
	{
		id: 0,
		category: "Camizas",
		title: "Camisa de vestir azul",
		brand: "Zomo",
		price: 2450,
		stock: 9,
		picUrl:
			"https://i.ibb.co/TW6RhNb/camisa1.png",
		description:
			"camisa de vestir azul, camiseta camisa de vestir, camisa de vestir, camiseta, azul png",
	},
	{
		id: 1,
		category: "Camizas",
		title: "Camisa Azul Clipart",
		brand: "Zomo",
		price: 1450,
		stock: 5,
		picUrl:
			"https://i.ibb.co/3v9JNP3/camisa2.png",
		description:
			"Camisa Azul Clipart....",
	},
	{
		id: 2,
		category: "Camizas",
		title: "Camisa Naranja",
		brand: "Zomo",
		price: 4450,
		stock: 15,
		picUrl:
			"https://i.ibb.co/H7665SW/camisa3.png",
		description:
			"Camisa Naranja.......",
	},
	{
		id: 3,
		category: "Camizas",
		title: "Camisa Gris",
		brand: "Zomo",
		price: 3450,
		stock: 19,
		picUrl:
			"https://i.ibb.co/xfCXh3V/camisa4.jpg",
		description:
			"ropa de camisa para hombres",
	},
	{
		id: 4,
		category: "Camizas",
		title: "Camisa de trabajo de algodón",
		brand: "Zomo",
		price: 2450,
		stock: 99,
		picUrl:
			"https://i.ibb.co/sPmb2M9/camisa5.jpg",
		description:
			"Bulwark - Camisa de trabajo de algodón resistente al fuego de 7 onzas con ventilación de manga para hombre",
	},
	{
		id: 5,
		category: "Camizas",
		title: "Camisa Morada",
		brand: "Zomo",
		price: 500,
		stock: 9,
		picUrl:
			"https://i.ibb.co/ydNTC3J/camisa5.png",
		description:
			"Camisa morada de vestir............",
	},
	{
		id: 6,
		category: "Pantalones",
		title: "Eco Ezra Matt Rosegold",
		brand: "Kaya Elox",
		price: 16800,
		stock: 11,
		picUrl:
			"https://i.ibb.co/vjTfzm9/pantalon5.jpg",
		description:
			"Pantalones para vesttir........",
	},
	{
		id: 7,
		category: "Pantalones",
		title: "Eco Ezra Matt Blue",
		brand: "Kaya Elox",
		price: 16800,
		stock: 8,
		picUrl:
			"https://i.ibb.co/7Q6scJ1/pantalon1.png",
		description:
			"Pantalones para vesttir........",
	},
	{
		id: 8,
		category: "Pantalones",
		title: "Eco Slice - Small Rosegold",
		brand: "Kaya Elox",
		price: 13000,
		stock: 14,
		picUrl:
			"https://i.ibb.co/pXmJM8V/pantalon2.jpg",
		description:
			"Pantalones para vesttir........",
	},
	{
		id: 9,
		category: "Pantalones",
		title: "Aeon V4",
		brand: "Lounge Jungle",
		price: 24000,
		stock: 3,
		picUrl:
			"https://i.ibb.co/PgGcFGG/pantalon3.jpg",
		description:
			"Pantalones para vesttir........",
	},
	{
		id: 10,
		category: "Pantalones",
		title: "Set Twist Glow",
		brand: "Kaya Elox Eco",
		price: 21000,
		stock: 6,
		picUrl:
			"https://i.ibb.co/mqYZwKt/pantalon4.jpg",
		description:
			"Pantalones para vesttir........",
	},
	{
		id: 11,
		category: "Pantalones",
		title: "Red Clear",
		brand: "Vyro Penta",
		price: 19650,
		stock: 4,
		picUrl:
			"https://i.ibb.co/84CNNRF/pantalon6.jpg",
		description:
			"Pantalones para vesttir........",
	},
]

const task = new Promise((resp) => {
	setTimeout(() =>{
		resp(products)
}, 5000)
})

export const getItem = () => {
	return task
}
