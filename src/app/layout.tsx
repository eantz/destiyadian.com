import './styles/_main.scss';

export const metadata = {
  title: 'destiyadian.com',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="root">
        {children}

        <div id="root-modal"></div>
      </body>
    </html>
  )
}
