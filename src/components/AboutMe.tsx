import React from 'react';
import VladimirPhoto from '../Vladimir.jpg';

const AboutMe: React.FC = () => {
    return (
        <>
            <header className="header">
                <h1>Небольшая информация обо мне</h1>
            </header>

            <main className="container">
                <section className="profile">
                    <img src="/Vladimir.jpg" alt="Фото профиля" className="profile-photo"/>
                    <h2>Владимир Ямщиков</h2>
                    <p className="bio">Привет! Меня зовут Владимир Ямщиков, я студент НГТУ (НЭТИ), факультет ФПМИ и начинающий веб-разработчик. Увлекаюсь
                        программированием, созданием сайтов и изучением новых технологий.</p>
                </section>

                <section className="history">
                    <h3>Моя история</h3>
                    <ul>
                        <li>Окончил Инженерный Лицей НГТУ с 2-мя 4-ками и остальными 5-ками</li>
                        <li>Закончил IT School Samsung</li>
                        <li>Участвловал в различных олимпиадах и конкурсах</li>
                        <li>Шарю за прототипирование и железо</li>
                        <li>С 2022 учусь в НГТУ НЭТИ на факультете ФПМИ</li>
                        <li>Учащийся школы 21 от Сбера</li>
                    </ul>
                </section>

                <section className="interests">
                    <h3>Мои интересы</h3>
                    <ul>
                        <li>Веб-разработка (HTML, CSS, JavaScript)</li>
                        <li>Программирование на Python и Django</li>
                        <li>Увлечение нейронными сетями</li>
                        <li>Занимаюсь программированием дополнительно в школе 21 от Сбера</li>
                        <li>Чтение книг по саморазвитию</li>
                        <li>Путешествия и фотография</li>
                    </ul>
                </section>

                <section className="plans">
                    <h3>Мои планы</h3>
                    <ul>
                        <li>Закончить ВУЗ на красный диплом</li>
                        <li>Закончить школу 21 от Сбера</li>
                        <li>Пройти стажировку на 4м курсе и устроиться на работу</li>
                        <li>Продолжать заниматься программированием и прокачкой опыта</li>
                        <li>Участвие в хакатонах и олимпиадах по проограммированию</li>
                        <li>Порадоваться наличию свободного времени</li>
                    </ul>
                </section>

                <section className="skills">
                    <h3>Навыки</h3>
                    <ul>
                        <li>HTML/CSS — уверенное владение</li>
                        <li>JavaScript — базовые/средние знания</li>
                        <li>React + Typescript - средние знания</li>
                        <li>C/C++ - уверенное владение</li>
                        <li>Python (Django) — средний уровень</li>
                        <li>Работа с Docker</li>
                        <li>Знаю, как работать с Fortran и Assembler</li>
                        <li>Немного знаю Java</li>
                    </ul>
                </section>

                <section className="contacts">
                    <h3>Контакты</h3>
                    <p>Email: <a href="mailto:89137420014a@gmail.com">89137420014a@gmail.com</a></p>
                    <p>GitHub: <a href="https://github.com/FAST-Technologies" target="_blank">FAST-Technologies</a></p>
                    <p>VK: <a href="https://vk.com/idf.a.s.t.play" target="_blank">idf.a.s.t.play</a></p>
                    <p>Telegram: <a href="https://web.telegram.org/a/" target="_blank">@FAST_entertainment</a></p>
                </section>
            </main>

            <footer className="footer">
                <p>© 2025 Владимир Ямщиков. Все права защищены.</p>
            </footer>
        </>
    );
};

export default AboutMe;