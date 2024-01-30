export const Navbar: React.FC<{ onClick: (e: string) => void }> = ({
  onClick,
}) => {
  return (
    <nav>
      <button onClick={() => onClick('planets')}>Planets</button>
      <button onClick={() => onClick('people')}>People</button>
    </nav>
  )
}
