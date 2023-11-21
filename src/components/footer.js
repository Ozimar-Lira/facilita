import React from 'react';
import Image from 'next/image';
import './lista_Eventos.css';
import Link from 'next/link';

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/versao_do_fontawesome/css/all.min.css"
  integrity="sha512-...."
  crossorigin="anonymous"
/>;

function Footer() {
  return (
    <div className="link">
      <Link className="linkitem" href="/home">
        <Image
          src="/home.png"
          alt="Home Logo"
          width={24}
          height={24}
          priority
          //  className="absolute"
          //style={{ background: 'white' }}
        />
      </Link>
      <Link className="linkitem" href="/edit">
        <Image
          src="/edit.png"
          alt="Edit Logo"
          width={24}
          height={24}
          priority
          //  className="absolute"
          //style={{ background: 'white' }}
        />
      </Link>
      <Link className="linkitem" href="/user">
        <Image
          src="/user.png"
          alt="Home Logo"
          width={24}
          height={24}
          priority
          //  className="absolute"
          //style={{ background: 'white' }}
        />
      </Link>
    </div>
  );
}

export default Footer;
