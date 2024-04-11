import RootLayout from '@/app/components/Layout';
import React from 'react';

const Home = () => {
  return <main>
    <p className="text-xl">Lê Ngọc Phan 123</p>
  </main>;
};

Home.getLayout = (page: React.ReactNode) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;