import Carousel from "../Carousel/Carousel";
import CarouselProdutos from '../CarouselProdutos/CarouselProdutos';
import Navbar from "../Navbar/Navbar";
import styles from './Home.module.css';

function Home() {
    return (
        <div>
            <Navbar />
            <div className={styles.content}>
                <h1 className={styles.sloganLoja}>Aqui você encontra os melhores produtos de qualidade!!!</h1>
            
                <Carousel />

                <div className={styles.containerSecao} style={{ marginTop: '40px', padding: '20px' }}>
                    <div style={{ backgroundColor: '#A52A2A', marginTop: '40px' }}>
                        <h2 className={styles.tituloSecaoNossaHistoria}>
                            <img style={{ width: '40px' }} src="/Chef.png" alt="" />
                            Conheça nossa história
                        </h2>
                    </div>
                </div>

                <div className={styles.secaoHistoria}>
                    <div>
                        <p>
                            <img src="/check.png" alt="Check Out" />
                            Em uma charmosa rua de paralelepípedos no coração de Maceió, nasceu o restaurante Sabores e Aromas, um sonho realizado por Maria de Fátima Nunes Alves, uma apaixonada pela arte da culinária e pela magia dos encontros à mesa. A história de Maria de Fátima começa há mais de uma década, quando decidiu transformar sua paixão pela gastronomia em um negócio próprio.
                        </p>
                    </div>
                    <div>
                        <p>
                            <img src="/check.png" alt="Check Out" />
                            O nome Sabores e Aromas foi inspirado nas memórias olfativas e gustativas que cada prato proporciona. Cada receita do cardápio foi cuidadosamente selecionada para levar os clientes em uma jornada sensorial, evocando lembranças e criando novas experiências. Desde a entrada até a sobremesa, cada prato é uma homenagem aos ingredientes frescos e de alta qualidade, muitos deles adquiridos de produtores locais e orgânicos.
                        </p>
                    </div>
                    <div>
                        <p>
                            <img src="/check.png" alt="Check Out" />
                            O restaurante rapidamente se tornou um ponto de encontro para amantes da boa comida e das boas conversas. Além dos pratos deliciosos, Sabores & Aromas se destaca pelo atendimento personalizado, onde cada cliente é tratado como um velho amigo. Maria de Fátima faz questão de conhecer todos pelo nome, ouvir suas preferências e até mesmo adaptar receitas para atender às necessidades e desejos específicos.
                        </p>
                    </div>
                    <div>
                        <p>
                            <img src="/check.png" alt="Check Out" />
                            Após anos trabalhando em renomados restaurantes ao redor do mundo, Maria de Fátima decidiu que era hora de criar algo único, que trouxesse o melhor de suas experiências e aprendizagens. Em uma viagem à Toscana, enquanto degustava vinhos locais e pratos tradicionais, a ideia de abrir um restaurante tomou forma. Queria um lugar onde pudesse não apenas cozinhar, mas também compartilhar histórias e tradições gastronômicas com seus clientes.
                        </p>
                    </div>
                    <div>
                        <p>
                            <img src="/check.png" alt="Check Out" />
                            Ao entrar no Sabores e Aromas, os clientes são recebidos com um ambiente acolhedor e rústico, decorado com elementos que remetem às viagens de Maria de Fátima. A cozinha aberta permite que todos possam observar a paixão e dedicação com que prepara cada refeição. Às sextas-feiras, há uma noite temática, onde pratos de diferentes partes do mundo são apresentados, sempre acompanhados de uma breve história sobre sua origem e significado cultural.
                        </p>
                    </div>
                    <div>
                        <p>
                            <img src="/check.png" alt="Check Out" />
                            Sabores e Aromas não é apenas um restaurante; é um local onde o amor pela culinária e pelas pessoas se encontra em cada detalhe. É um lugar onde as refeições são mais do que simples alimentações, são experiências que tocam o coração e a alma, deixando memórias inesquecíveis. E assim, Maria de Fátima continua a viver seu sonho, compartilhando com o mundo os sabores e aromas que tanto ama, e criando uma comunidade de clientes fiéis que sabem que ali, cada refeição é uma celebração da vida.
                        </p>
                    </div>
                </div>

                <div className={styles.containerSecao} style={{ marginTop: '40px', padding: '20px' }}>
                    <div id="produtos" style={{ backgroundColor: '#A52A2A', marginTop: '40px' }}>
                        <h2 className={styles.tituloSecaoNossaHistoria}>
                            <img style={{ width: '40px' }} src="/Medalha.png" alt="" />
                            Conheça nossos produtos
                        </h2>
                    </div>

                    <div className={styles.secaoProdutos}>
                        <p>Descubra o verdadeiro sabor da tradição e a magia dos aromas no Sabores e Aromas onde cada prato é uma experiência inesquecível</p>
                    </div>
                    <CarouselProdutos />
                </div>

                <div  id="contato" className={styles.containerSecao} style={{ marginTop: '40px', padding: '20px' }}>
                    <div style={{ backgroundColor: '#A52A2A', marginTop: '40px' }}>
                        <h2 className={styles.tituloSecaoNossaHistoria}>
                            <img style={{ width: '40px' }} src="/info.png" alt="" />
                            Contatos
                        </h2>
                    </div>

                    <div className={styles.secaoContato}>
                        <p>Conecte-se com os sabores e aromas que encantam: Siga o Sabores e Aromas nas redes sociais e mergulhe em nossas delícias!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
