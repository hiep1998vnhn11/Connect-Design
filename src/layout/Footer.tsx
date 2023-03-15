import NextLink from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const Footer: React.FC = () => {
  return (
    <section id="Footer" className="bg-primary">
      <footer className="">
        <div className="flex container py-6">
          <div className="w-2/5 pr-4">
            <h2 className="text-secondary text-2xl font-bold mb-4">
              Công ty TNHH {AppConfig.title}
            </h2>
            <p>
              Chuyên cung cấp phụ tùng Hyundai chính hãng và phụ tùng ô tô chính
              hãng cho các dòng xe Toyota, Honda, Misubishi, Kia, ...
            </p>
            <ul className="mt-4">
              <li className="mb-2">Địa chỉ: {AppConfig.address}</li>
              <li className="mb-2">Hotline: {AppConfig.phone}</li>
            </ul>
          </div>
          <div className="w-[30%]">
            <h3 className="font-bold text-xl mb-4 mt-1">Hỗ trợ khách hàng</h3>
            <ul>
              {AppConfig.footerNav.map((item) => (
                <li className="mb-3" key={item.url}>
                  <NextLink href={item.url} className="link">
                    {item.title}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[30%]">
            <h3 className="font-bold text-xl mb-4 mt-1">Đăng ký nhận tin</h3>
          </div>
        </div>
      </footer>
      <div className="container text-center py-4">
        <small>
          Copyright © {new Date().getFullYear()} bản quyền thuộc về công ty TNHH{' '}
          {AppConfig.title}.
        </small>
      </div>
    </section>
  );
};
export default Footer;
