import Aside from "../aside/aside";
import Portrait from "../portrait/portrait";
import "./character.scss";

import configIcon from "../../assets/config.svg";

export default function Character() {
  const atributos = [
    {
      valor: 5,
      nome: "Força",
    },
    {
      valor: 12,
      nome: "Destreza",
    },
    {
      valor: 16,
      nome: "Poder",
    },
    {
      valor: 10,
      nome: "Constituição",
    },
    {
      valor: 11,
      nome: "Carisma",
    },
    {
      valor: 3,
      nome: "Sorte",
    },
    {
      valor: 15,
      nome: "Inteligencia",
    },
    {
      valor: 14,
      nome: "Percepção",
    },
  ];
  return (
    <>
      <Aside boxClass="character">
        <Portrait life={12} sanity={96} mana={32} name="Aoi Akuma" />
        <section className="character__atributes">
          <h2 className="character__atributes__title">Atributos</h2>
          <div className="character__atributes__item__container">
            {atributos.map((item) => (
              <div className="character__atributes__item" key={item.nome}>
                <input
                  type="text"
                  defaultValue={item.valor}
                  className="character__atributes__item__input"
                />
                <p className="character__atributes__item__text">{item.nome}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="character__configuration">
          <div className="character__configuration__container">
            <img src={configIcon} alt="" />
          </div>
        </div>
      </Aside>
    </>
  );
}
