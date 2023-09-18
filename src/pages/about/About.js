import styles from './About.module.css';

function About() {
    return (
        <section className={styles.secAbout}>
            <div className={styles.containerAbout}>
            <h1>Sobre o Projeto</h1>
            <br/>
            <p>A aplicação Web consiste em um conversor de moedas, onde é possível converter valores entre as moedas Real, Dólar e Euro.</p>
            <br/>
            <p>Além de habilidades com HTML, CSS e JavaScript, este foi meu primero projeto em meu GitHub a utilizar React, na qual também venho estudando.
            Utilizei também a biblioteca de componentes ANT Design.</p>
            <br/>
            <h1>Sobre o Desenvolvedor</h1>
            <br/>
            <p>Meu nome é Vitor Gabriel Comin, estudante no 6º semestre de Bacharelado em Sistemas de Informação, na Univille. Venho estudando e me desenvolvendo
            em HTML5, CSS3, JavaScript, TypeScript, Angular e React. Estou me desenvolvendo para então ir em busca de iniciar minha carreira como desenvolvedor.</p>
            <br/>
            <p>Confira meu currículo em meu <a href='https://www.linkedin.com/in/vitorgabrielcomin/' target="_blank">LinkedIn</a> e também meu portfólio de projetos em meu <a href='https://github.com/VitorComin' target="_blank">GitHub</a>.</p>
            </div>
        </section>
    )
}

export default About