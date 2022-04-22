import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = ({name, air_date, episode, id}:any): JSX.Element  => {

    return <div className="tarjeta-episodio" key= {'episodio_'+ id}>
            <h4>{name}</h4>
            <div>
                <span>{episode}</span>
                <span>Lanzado el: {air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;