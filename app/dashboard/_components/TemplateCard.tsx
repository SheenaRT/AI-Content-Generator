import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';

export default function TemplateCard(item: TEMPLATE) {
  return (
    <div>
      <Image src={item.icon} alt='icon' width={50} height={50} />
      <h2>{item.name}</h2>
      <p>{item.desc}</p>
    </div>
  );
}
