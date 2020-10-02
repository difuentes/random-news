import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  //definir state de categorias y noticias
  const [categorias,guardarCategoria ] =  useState('');
  const [noticias,guardarNoticias] =  useState([]);

  //consultar si cambia state de categorias
  useEffect(()=>{

    const consultarAPI = async()=>{

      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categorias}&apiKey=cbfe3b5b394647d5b3ba8fa29f8be39e`;
      //console.log(url);
      const respuesta = await fetch(url);
      const noticias =  await respuesta.json();
      guardarNoticias(noticias.articles); 

    }
    consultarAPI();

  },[categorias])

  return (

    <Fragment>
     <Header
      tituto='DiFuentes - Buscador de Noticias '
     />
     <div className="container white ">
      <Formulario
        guardarCategoria={guardarCategoria}
      />
      <ListadoNoticias
        noticias={noticias}
      />
     </div>
    </Fragment>
  );
}

export default App;
