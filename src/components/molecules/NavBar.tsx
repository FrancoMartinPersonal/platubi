
import logo from '../../res/platubi-logo.svg'
import '../../css/Navbar.css'
import ThemeToggle from '../atoms/ThemeToggle';

export interface NavBarProps {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>
}
 
const NavBar:React.FC<NavBarProps> = ({theme, setTheme}) => {
  let classBodyColor = "dark-body-color"
  let classBaseColor = "base-dark"
  let classBarTheme = "dark-bar"
  if (theme === 'light') {
    classBodyColor = "light-body-color"
    classBaseColor = "base-light"
    classBarTheme = "light-bar"
  }

  return (
    <>
      <header className={`${classBaseColor}`}>
        <div className={`${classBaseColor} navBG`}>
          <div className="navbar">
            <div className="logo-container">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <nav className={`nav ${classBodyColor} regular18px`}>
              <span>Inicio</span><span>Contactenos</span><span>FAQ</span>
            </nav>
            {
            //ESTE BUTTONS-GUESTS PODRIA SER OTRO COMPONENTE QUE CHEQUEE SI EXISTE
            // O NO UN USUARIO LOGUEADO (FIREBASE)
            }
            <div className="buttons-guests">
              <span className="buttons-guests-register">Registrate</span> <span className="buttons-guests-login">Inicia sesión</span>
            </div>
            {
            // ESTE SERÁ OTRO COMPONENTE QUE CONTROLE EL TEMA DE TODA LA PÁGINA
            // YA SEA OSCURO O CLARO (REDUX)
            // LAS DIMENSIONES DEL MISMO PODRÁN CONTROLARSE MEDIANTE LAS
            }
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      <div className={`horizontal-bar ${classBarTheme}`}></div>
      </header>
    </>
  );
}
 
export default NavBar;
