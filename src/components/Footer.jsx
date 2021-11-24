import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faCheckSquare, faCoffee,faEnvelope)

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
        <div className="container p-3 pb-0">
          <h3 className="contact-me p-3">Contact me:</h3>
          <section className="mb-4">      
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/mahmoudgaber07/" role="button" 
              ><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
      
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/mahmoudgaber07" role="button" 
            ><FontAwesomeIcon icon={['fab', 'github']}/></a>
      
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.behance.net/mahmoudgaber16" role="button" 
            ><FontAwesomeIcon icon={['fab', 'behance']}/></a>
            
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/MahmoudGaber07/" role="button" 
              ><FontAwesomeIcon icon={['fab', 'facebook']}/></a>
      
            <a className="btn btn-outline-light btn-floating m-1" href = "mailto: mahmoudgaber94@gmail.com" role="button" 
            ><FontAwesomeIcon icon={['fas','envelope']} /></a>
          </section>
        </div>
      
        <div className="text-center p-3">
        All Copyright © : Mahmoud Gaber 2021 
        </div>
      </footer>
    )
}

export default Footer