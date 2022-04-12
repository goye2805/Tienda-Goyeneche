const NavBar = () => {

    const menu = {
        marginRight: 60,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 9999,
        borderWidth: 5,
        borderColor: '#fff',
        color: '#fff',
        textAlign: 'center'
    }
    return (
        <div>
            <button style={menu}>Inicio</button>
            <button style={menu}>Productos</button>
            <button style={menu}>Ayuda</button>
            <button style={menu}>Contactanos</button>
        </div>
    )
}
export default NavBar