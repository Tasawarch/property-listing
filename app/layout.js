// app/layout.js
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Property Listing App',
  description: 'Browse and explore properties for sale or rent',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
