import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <Link href="/">Главная</Link>
            <Link href="/about">О компании</Link>
            <Link href="/contacts">Контакты</Link>
        </nav>
    );
}
