import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-[#54786a]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Über uns</h3>
            <p className="text-sm">Entdecken Sie die Welt des Shoppings mit unserem Online-Shop und finden Sie Ihre Lieblingsprodukte zu unschlagbaren Preisen.</p>
          </div>

          <div className="mb-8 ml-16">
            <h3 className="text-lg font-bold n flex gap-3 mb-4">Kundenservice</h3>
            <ul className="text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Kontakt</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Rückgabe</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Versandinformationen</a></li>
            </ul>
          </div>
          <div className="mb-8  ml-12">
            <h3 className="text-lg font-bold mb-4 flex gap-3">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><FaFacebook size={30} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={30}/></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={30} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Melden Sie sich für unseren Newsletter an und erhalten Sie exklusive Angebote direkt in Ihr Postfach!</p>
            <form>
              <div className="flex items-center">
                <input type="email" placeholder="Ihre E-Mail-Adresse" className="py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#c4d0cc] text-gray-300" />
                <button type="submit" className=" py-2 px-4 rounded-r-lg hover:bg-[#809a91] active:bg-[#7b8f87] focus:outline-none focus:ring focus:ring-violet-300 bg-[#e4e4e4]">Abonnieren</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-sm text-center">&copy; {new Date().getFullYear()} Unser Online-Shop. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
