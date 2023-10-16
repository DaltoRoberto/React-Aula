import Gallery from "./Fotos";

const photos = [
    {
      id: 1,
      name: "Imagem 1",
      url: "https://daltoroberto.com.br/api/products/1.png",
    },
    {
      id: 2,
      name: "Imagem 2",
      url: "https://daltoroberto.com.br/api/products/2.png",
    },
    {
      id: 3,
      name: "Imagem 3",
      url: "https://daltoroberto.com.br/api/products/3.png",
    },
    {
      id: 4,
      name: "Imagem 4",
      url: "https://daltoroberto.com.br/api/products/4.png",
    },
    {
      id: 5,
      name: "Imagem 5",
      url: "https://daltoroberto.com.br/api/products/5.png",
    },
    {
      id: 6,
      name: "Imagem 6",
      url: "https://daltoroberto.com.br/api/products/6.png",
    },
    {
      id: 7,
      name: "Imagem 7",
      url: "https://daltoroberto.com.br/api/products/7.png",
    },
    {
      id: 8,
      name: "Imagem 8",
      url: "https://daltoroberto.com.br/api/products/8.png",
    },
    {
      id: 9,
      name: "Imagem 9",
      url: "https://daltoroberto.com.br/api/products/9.png",
    },
    {
      id: 10,
      name: "Imagem 10",
      url: "https://daltoroberto.com.br/api/products/10.png",
    },
    {
      id: 11,
      name: "Imagem 11",
      url: "https://daltoroberto.com.br/api/products/11.png",
    },
    {
      id: 12,
      name: "Imagem 12",
      url: "https://daltoroberto.com.br/api/products/12.png",
    },
    {
      id: 13,
      name: "Imagem 13",
      url: "https://daltoroberto.com.br/api/products/13.png",
    },
    {
      id: 14,
      name: "Imagem 14",
      url: "https://daltoroberto.com.br/api/products/14.png",
    },
  ];
  
  const Galeria = () => {
    return (
      <div>
        <Gallery photos={photos} />
      </div>
    );
  };
  
  export default Galeria;
  