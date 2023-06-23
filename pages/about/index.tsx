import Layout from "@/components/layout/layout";
import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
    return (
        <Layout>
            <div className={styles.item}>
                <h3>Заголовок блока</h3>
                <div className={styles.content}>
                    {/* <Image/> */}
                    <div>
                        В проекте Next.js статические изображения обычно хранятся в папке public. Это правило можно назвать общепринятым, потому что
                        директория public является единственным местом, где мы можем хранить статические ресурсы, такие как изображения, видео и
                        шрифты. Эти ресурсы будут напрямую предоставлены клиенту без обработки сервером Next.js. Для сохранения изображений,
                        использовавшихся для иллюстрации нашей компании, мы создали папку team в папке public и поместили в нее три изображения. В
                        ближайшее время мы рассмотрим, как использовать их в коде.
                    </div>
                </div>
            </div>
        </Layout>
    );
}
