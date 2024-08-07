import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.containerLogin}>
            <div className={styles.containerLogotipo}>
                <img src="/Logotipo Loja Sabores & Aromas.png" alt="Logotipo Loja Sabores & Aromas" />
            </div>
            <h1 className={styles.tituloLogin}>Área de Login</h1>
            <div className={styles.formContainer}>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    className={styles.inputField}
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    className={styles.inputField}
                />
                <button type="submit" className={styles.loginButton}>Entrar</button>
            </div>
                <br />
                <a className={styles.links} href="/cadastro">Não tem conta? Cadastre-se</a>
                <br />
                <a className={styles.links} href="#">Esqueci minha senha</a>
        </div>
    );
}

export default Login;