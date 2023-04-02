import Navbar from './Navbar';
import { HljsProvider } from './providers/hljs.provider';
import './styles.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="">
        <HljsProvider>
          <Navbar />
          {children}
        </HljsProvider>
      </body>
    </html>
  );
}
