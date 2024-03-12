'use client';

import { FOOTER_NAV_IMGS } from '../constants/constants';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='flex gap-5'>
        {FOOTER_NAV_IMGS.map((img) => (
          <Link href={img.url} key={img.id} target='blank'>
            <picture>
              <img
                src={img.src}
                alt={img.alt}
                loading='lazy'
                width={35}
                height={35}
              />
            </picture>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
