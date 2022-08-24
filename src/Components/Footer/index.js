import * as S from "./style";

import Image from "../Image/index";
import marvel from "../../images/marvel-logo.png";
import ps from "../../images/ps-bug.svg";
import sie from "../../images/sie.png";

const MainSection = () => {
  return (
    <S.Footer>
      <div>
        <p>
          © 2022 Sony Interactive Entertainment LLC. Todos os direitos
          reservados ©
        </p>
        <small>
          Projeto desenvolvido por{" "}
          <a href="https://jose-washington.vercel.app">
            José Washington
          </a>
        </small>
      </div>
      <S.Images>
        <Image src={marvel} />
        <Image src={ps} />
        <Image src={sie} />
      </S.Images>
    </S.Footer>
  );
};

export default MainSection;
