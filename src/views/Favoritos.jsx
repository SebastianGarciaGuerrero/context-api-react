import Galeria from "../components/Galeria"

export default function Favoritos() {
  
  return (
    <div id="Favoritos">
      <h1>Fotos favoritas</h1>
      <Galeria propFavorito = {true} />
    </div>
  );
}
