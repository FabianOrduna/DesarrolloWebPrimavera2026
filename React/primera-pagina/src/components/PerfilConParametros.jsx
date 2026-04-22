function PerfilConParametros(props) {
  return <img src={props.url} alt={props.textoAlternativo} width={"150px"} />;
}

export default PerfilConParametros;

function PerfilConParametrosExtraidos({ url, textoAlternativo }) {
  return <img src={url} alt={textoAlternativo} width={"150px"} />;
}
