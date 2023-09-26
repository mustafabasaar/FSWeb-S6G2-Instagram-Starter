import React from "react";
import Yorum from "../Yorum";
import "./Yorumlar.css";
import sahteVeri from "../../sahte-veri";
const tumYorumlar = sahteVeri.comments;
const Yorumlar = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar, Yorum } = props;

  return (
    <div>
      {/* her gönderi yorumları için map'le işleyerek bir Yorum bileşeni döndürün (proplarına dikkat ederek)*/}
      {tumYorumlar.map((item, idx) => {
        return <Yorum key={idx} yorum={item} yorumlar={Yorum} />;
      })}
    </div>
  );
};

export default Yorumlar;
