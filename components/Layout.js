
const Layout = ({ children }) =>{
        return(<>
           <header>
               this is header
           </header>
           <main role="main">
              {children}
           </main>
           <footer>
               this is footer
           </footer>
        </>)
}
export default Layout