import Header from '../components/Header';
import Footer from '../components/Footer';
import '@/app/styles/globals.css';

const RootLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <div className="flex flex-col min-h-screen mx-auto">
                <Header />
                <div className="flex-grow">
                    <main className="my-0 py-16">{children}</main>
                </div>
                <Footer />
            </div>
        </html>
    );
};

export default RootLayout;