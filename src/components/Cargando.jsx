function Cargando() {
    return (
        <div id="loading-productos" className="text-center p-4" >
            <p className="mb-3">Cargando productos...</p>
            <img
                style={{ width: "350px" }}
                src={`${import.meta.env.BASE_URL}/img/loading.gif`}
                alt="Cargando productos"
            />
        </div>
    )
}

export default Cargando