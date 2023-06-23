import Layout from "@/components/layout/layout";
import styles from "./about.module.css";
import Image from "next/image";
import one from "@/public/team/1.avif";
import two from "@/public/team/2.avif";
import three from "@/public/team/3.avif";

export default function About() {
    return (
        <Layout>
            <div className={styles.item}>
                <h3>Заголовок блока</h3>
                <div className={styles.content}>
                    <Image className={styles.image} src={one} alt="https://unsplash.com/photos/Kz8nHVg_tGI" />
                    <div>
                        В проекте Next.js статические изображения обычно хранятся в папке public. Это правило можно назвать общепринятым, потому что
                        директория public является единственным местом, где мы можем хранить статические ресурсы, такие как изображения, видео и
                        шрифты. Эти ресурсы будут напрямую предоставлены клиенту без обработки сервером Next.js. Для сохранения изображений,
                        использовавшихся для иллюстрации нашей компании, мы создали папку team в папке public и поместили в нее три изображения. В
                        ближайшее время мы рассмотрим, как использовать их в коде.
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <h3>Инженеры-разработчики</h3>
                <div className={styles.content}>
                    <Image className={styles.image} src={two} alt="https://unsplash.com/photos/g1Kr4Ozfoac" />
                    <div>
                        Компонент Image включает встроенные функции специальных возможностей, которые упрощают для программ чтения с экрана и других
                        вспомогательных технологий анализ и понимание содержимого изображения. Это важно для обеспечения доступности приложения для
                        всех пользователей.
                    </div>
                </div>
            </div>

            <div className={styles.item}>
                <h3>Отдел продаж</h3>
                <div className={styles.content}>
                    <Image className={styles.image} src={three} alt="https://unsplash.com/photos/5fNmWej4tAA" />
                    <div>
                        Next.js автоматически оптимизирует изображения. Когда мы используем компонент Image, он создаёт несколько версий картинки с
                        разными размерами и разрешениями и предоставляет оптимальную версию пользователю в зависимости от его устройства и размера
                        области просмотра. Это может значительно улучшить производительность и взаимодействие с пользователем.
                    </div>
                </div>
            </div>
        </Layout>
    );
}
