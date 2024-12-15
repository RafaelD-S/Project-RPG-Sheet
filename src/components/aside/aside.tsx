import { Iaside } from "./models/asideInterface";
import "./aside.scss";

export default function Aside({ children, boxClass }: Iaside) {
  return (
    <>
      <aside className={`aside ${boxClass}`}>
        <section className="aside__container">{children}</section>
      </aside>
    </>
  );
}
