function comprar(producto) {
  let numero = "595971206016"; // Cambia por tu número con código país
  let mensaje = `Hola, quiero comprar ${producto}`;
  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
