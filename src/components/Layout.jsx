import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-primary-50/50 dark:bg-primary-950"></div>
            </div>

            <Header />
            <main className="flex-grow relative z-10 w-full">
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}
