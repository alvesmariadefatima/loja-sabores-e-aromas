import styles from './Cadastro.module.css';

function Cadastro() {
    return (
        <div className={styles.containerCadastro}>
            <div className={styles.containerLogotipo}>
                <img src="/Logotipo Loja Sabores & Aromas.png" alt="Logotipo Loja Sabores & Aromas" />
            </div>

            <h1>Cadastro</h1>

            <div className={styles.formContainer}>
                <input 
                    type="text" 
                    placeholder="Nome Completo" 
                    className={styles.inputField}
                />

                <input 
                    type="text" 
                    placeholder="CPF" 
                    className={styles.inputField}
                />

                <input 
                    type="text" 
                    placeholder="Data de Nascimento" 
                    className={styles.inputField}
                />

                <div className={styles.radioGroup}>
                    <p>Selecione o Gênero:</p>
                    <label className={styles.radioLabel}>
                        <input 
                            type="radio" 
                            name="genero" 
                            value="masculino" 
                            className={styles.radioInput}
                        />
                        Masculino
                    </label>
                    <label className={styles.radioLabel}>
                        <input 
                            type="radio" 
                            name="genero" 
                            value="feminino" 
                            className={styles.radioInput}
                        />
                        Feminino
                    </label>
                    <label className={styles.radioLabel}>
                        <input 
                            type="radio" 
                            name="genero" 
                            value="lgbtquiap+" 
                            className={styles.radioInput}
                        />
                        Sou LGBTQIAP+
                    </label>
                    <label className={styles.radioLabel}>
                        <input 
                            type="radio" 
                            name="genero" 
                            value="nao_responder" 
                            className={styles.radioInput}
                        />
                        Prefiro não responder
                    </label>
                </div>

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

                <input 
                    type="password" 
                    placeholder="Confirme sua senha" 
                    className={styles.inputField}
                />  

                <button type="submit" className={styles.loginButton}>Cadastrar</button>
            </div>
        </div>
    );
}

export default Cadastro;