import '../assets/style/artista.css'
import CardArtist from  './CardArtist';
//beomgyu
import Beomgyu from '../assets/img/Beomgyu.png';
import Beomgyu2 from '../assets/img/Beomgyu2.png';
import Beomgyu3 from '../assets/img/Beomgyu3.png';
//Taehyun
import Taehyun from '../assets/img/Taehyun.png';
import Taehyun2 from '../assets/img/Taehyun2.png';
import Taehyun3 from '../assets/img/Taehyun3.png';
//soobin
import Soobin from '../assets/img/Soobin.png';
import Soobin2 from '../assets/img/Soobin2.png';
import Soobin3 from '../assets/img/Soobin3.png';
//Huening
import Huening from '../assets/img/Huening.png';
import Huening2 from '../assets/img/Huening2.png';
import Huening3 from '../assets/img/Huening3.png';
//Yeonjun
import Yeonjun from '../assets/img/Yeonjun.png';
import Yeonjun2 from '../assets/img/Yeonjun2.png';
import Yeonjun3 from '../assets/img/Yeonjun3.png';



function Artista() {

  const users = [{
    id: 1,
    name: "Soobin",
    lastName: "Choi",
    anioNacimiento: "5 de diciembre de 2000",
    position: "Lider, rapero, vocalista, bailarin",
    img1: Soobin,
    img2: Soobin2,
    img3: Soobin3
  },
  {
    id: 2,
    name: "Yeonjun",
    lastName: "Choi",
    anioNacimiento: "13 de septiembre de 1999",
    position: "Rapero principal, bailarin, vocalista",
    img1: Yeonjun,
    img2: Yeonjun2,
    img3: Yeonjun3
  },
  {
    id: 3,
    name: "Beomgyu",
    lastName: "Choi",
    anioNacimiento: "13 de marzo de 2001",
    position: "Vocalista, rapero, centro, visual, bailarin",
    img1: Beomgyu,
    img2: Beomgyu2,
    img3: Beomgyu3
  },
  {
    id: 4,
    name: "Taehyun",
    lastName: "Kang",
    anioNacimiento: "5 de febrero de 2002",
    position: "Vocalista, rapero, bailarin",
    img1: Taehyun,
    img2: Taehyun2,
    img3: Taehyun3
  },
  {
    id: 5,
    name: "Kai",
    lastName: "Huening",
    anioNacimiento: "14 de agosto de 2002",
    position: "Vocalista, rapero, bailarin, visul, maknae",
    img1: Huening,
    img2: Huening2,
    img3: Huening3
  }
  ];

  return (
    <>
      <h2><strong>MIEMBROS</strong></h2>
      {users.map((user) => {
        return (
          <CardArtist
            key={user.id}
            name={user.name}
            lastName={user.lastName}
            nacimiento={user.anioNacimiento}
            position={user.position}
            img1={user.img1}
            img2={user.img2}
            img3={user.img3}
          />
        )
      })}
    </>
  );
}
export default Artista;