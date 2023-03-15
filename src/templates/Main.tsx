import type { ReactNode } from 'react';

import Footer from '../layout/Footer';
import Header from '../layout/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    {props.meta}
    <Header />
    <div className="antialiased w-full text-gray-700 px-3 md:px-0">
      <div className="mx-auto">
        <div className="text-xl py-5">{props.children}</div>
      </div>
    </div>
    <Footer />
  </>
);

export { Main };
