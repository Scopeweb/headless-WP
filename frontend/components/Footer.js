import Link from "next/link";

const hrStyle = {
    marginTop: 75
};

const Footer = () => (
    <div>
        <hr style={hrStyle} />
        <p>
            ❤️{" "}
            <Link href="https://scopeweb.nyc">
                <a>Made by Scope Web</a>
            </Link>. 🍴{" "}
            <Link href="https://github.com/scopeweb/headless-wp-starter">
                <a>Fork on GitHub</a>
            </Link>.
        </p>
        <p>
            👋 Need help with your publishing platform?{" "}
            <Link href="mailto:info@scopeweb.nyc?subject=Partner+with+Scope+on+a+headless+CMS+project">
                <a>Say hi.</a>
            </Link>
        </p>
    </div>
);

export default Footer;
