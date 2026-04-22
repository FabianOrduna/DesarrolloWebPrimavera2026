import Perfil from "./Perfil";
import PerfilConParametros from "./PerfilConParametros";

export const Galeria = () => {
  return (
    <>
      <Perfil />
      <Perfil />

      <PerfilConParametros
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/330px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg"
        textoAlternativo="Charles Darwin"
      />

      <PerfilConParametros
        url="https://pymstatic.com/29788/conversions/jean-baptiste-lamarck-wide.jpg"
        textoAlternativo="Jean-Baptiste Lamarck"
      />
    </>
  );
};

export function GaleriaConArreglo() {
  const perfiles = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/330px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg",
      textoAlternativo: "Charles Darwin",
    },
    {
      url: "https://pymstatic.com/29788/conversions/jean-baptiste-lamarck-wide.jpg",
      textoAlternativo: "Jean-Baptiste Lamarck",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Marie_Curie_%281900%29.jpg",
      textoAlternativo: "Marie Curie",
    },
  ];

  // regreso los perfiles iterando sobre el arreglo con map
  return (
    <>
      {perfiles.map((perfil, index) => (
        <PerfilConParametros
          key={index}
          url={perfil.url}
          textoAlternativo={perfil.textoAlternativo}
        />
      ))}
    </>
  );
}
