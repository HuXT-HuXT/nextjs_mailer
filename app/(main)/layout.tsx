import { Header } from "./_components/header";

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainLayout;