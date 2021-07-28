import imageFile from "assets/img/photo-1624289596129-2dd4c436b93d.jpg";
import { Col } from "components";

export const App = () => (
  <div className={"container py-4"}>
    <h1 className={"display-4"}>
      Webpack Base
    </h1>

    <p className={"lead text-muted"}>
      Este é um boilerplate de projeto usando Webpack, para uso no meu tutorial Webpack 101. Ele é expansível e pronto para uso, inclusive com HMR! Basta editar o arquivo em <code>src/index.js</code> pra ver como funciona! Já vem com: Bootstrap, FontAwesome (<i className="fa fa-truck"/> <i className={"fa fa-search"}/>) e suporte a SASS, além de outras mágicas!
    </p>

    <p className={"text-muted"}>
      <small>
        (por algum motivo também adicionei um parser simples de JSX, então dá pra usar uns componentes de forma BEM simples também)
      </small>
    </p>

    <p>Esta página é completamente gerada pelo JavaScript, pode inspecionar! ;)</p>

    <p>Toma uma imagem com hash, pra por aí no seu cache:</p>

    <p className={"text-center"}>
      <img src={imageFile} alt={""}/>
    </p>

    <div className={"row"}>
      <Col className={"col-12 col-lg-4"}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae, illum voluptas excepturi ipsam porro adipisci placeat similique est nam velit ab obcaecati laborum facere, et consectetur quo voluptate iusto?</p>
      </Col>
      <Col className={"col-12 col-lg-4"}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae, illum voluptas excepturi ipsam porro adipisci placeat similique est nam velit ab obcaecati laborum facere, et consectetur quo voluptate iusto?</p>
      </Col>
      <Col className={"col-12 col-lg-4"}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae, illum voluptas excepturi ipsam porro adipisci placeat similique est nam velit ab obcaecati laborum facere, et consectetur quo voluptate iusto?</p>
      </Col>
    </div>

    <hr/>

    <p className={"text-muted"}>
      <small>
        <em>&copy;2021 Fabio Y. Goto</em>
      </small>
    </p>
  </div>
);
