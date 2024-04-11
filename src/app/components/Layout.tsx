import Header from './Header';
import Footer from './Footer';
import '@/app/styles/globals.css';

const RootLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
                <div className="flex-grow">
                    <Header />
                    <main className="my-0 py-16">{children}</main>
                </div>
                <Footer />
            </div>
        </html>
    );
};

export default RootLayout;