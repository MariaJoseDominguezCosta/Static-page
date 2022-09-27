import '../assets/style/footer.css'
import logoFacebook from '../assets/img/facebook-3-2.svg';
import logoTwitter from "../assets/img/twitter-6.svg";
import logoYoutube from '../assets/img/youtube-3.svg'
import logoInstagram from '../assets/img/instagram-5.svg'
function Footer() {
    return (
        <footer>
            <a href="https://www.facebook.com/TXT.bighit/" target="_blank" title="Facebook : Open in a New Window"><img src={logoFacebook} alt="Facebook"></img></a>
            <a href="https://twitter.com/TXT_bighit" target="_blank" title="Twitter (Official) : Open in a New Window"><img src={logoTwitter} alt="Twitter"></img></a>
            <a href="https://twitter.com/TXT_members" target="_blank" title="Twitter (Member) : Open in a New Window"><img src={logoTwitter} alt="Twitter"></img></a>
            <a href="https://www.instagram.com/txt_bighit/" target="_blank" title="Instagram : Open in a New Window"><img src={logoInstagram} alt="Instagram"></img></a>
            <a href="https://www.youtube.com/channel/UCtiObj3CsEAdNU6ZPWDsddQ" target="_blank" title="YouTube : Open in a New Window"><img src={logoYoutube} alt="Youtube"></img></a>
            <p>© 2022 Company, Inc</p>
            <ul>
                <li ><a href="#">Home</a></li>
                <li ><a href="#">Features</a></li>
                <li ><a href="#">Pricing</a></li>
                <li ><a href="#">FAQs</a></li>
                <li ><a href="#">About</a></li>
            </ul>
        </footer>
    );
}

export default Footer;