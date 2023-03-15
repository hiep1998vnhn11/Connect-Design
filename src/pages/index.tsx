import Image from 'next/image';

import banner from '../assets/images/banner.png';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main meta={<Meta />}>
    <Image
      src={banner}
      width={3960}
      height={1600}
      alt="banner"
      sizes="(max-width: 766px) 100vw, 100vw"
      layout="responsive"
      priority
    />
  </Main>
);
export default Index;
