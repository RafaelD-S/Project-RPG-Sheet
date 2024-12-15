import { useRef, useState } from "react";
import "./portrait.scss";
import imageIcon from "../../assets/image-icon.svg";
import shieldIcon from "../../assets/shield.svg";
import { Iportrait } from "./models/portraitInterface";

export default function Portrait({ life, sanity, mana, name, shield = 0, image }: Iportrait) {
  const [hasImage, setHasImage] = useState<File | null>(image || null);
  const [hasShield, sethasShield] = useState(false);
  const fileUploadRef = useRef<HTMLInputElement | null>(null);

  const uploadClick = () => {
    if (fileUploadRef.current) {
      fileUploadRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setHasImage(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];
    if (file) {
      setHasImage(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const fileUploaderClass = !hasImage ? " portrait--upload" : "";
  return (
    <figure
      className={`portrait${fileUploaderClass}`}
      onClick={uploadClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {!hasImage ? (
        <figcaption className="portrait__fileArea">
          <p>Arraste ou faça o upload de uma imagem</p>
          <img src={imageIcon} alt="" />
          <input
            ref={fileUploadRef}
            onChange={handleFileChange}
            type="file"
            className="portrait__fileArea__fileUploader"
          />
        </figcaption>
      ) : (
        <>
          <img src={URL.createObjectURL(hasImage)} alt="" className="portrait__image" />
          {name && (
            <div className="portrait__name">
              <p className="portrait__name__text">{name}</p>
              <img
                src={shieldIcon}
                alt=""
                className="portrait__name__icon"
                onClick={() => sethasShield((prev) => !prev)}
              />
            </div>
          )}

          {life !== undefined && sanity !== undefined && mana !== undefined && (
            <>
              <input className="portrait__status portrait__status--life" defaultValue={life} />
              <input className="portrait__status portrait__status--sanity" defaultValue={sanity} />
              <input className="portrait__status portrait__status--mana" defaultValue={mana} />
              {hasShield && (
                <input
                  className="portrait__status portrait__status--shield"
                  defaultValue={shield}
                />
              )}
            </>
          )}
        </>
      )}
    </figure>
  );
}
