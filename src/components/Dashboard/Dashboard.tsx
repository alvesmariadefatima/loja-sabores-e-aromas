import NavbarDashboard from '../NavbarDashboard/NavbarDashboard';
import styles from './Dashboard.module.css';

const nomeProdutos = [
    {
        id: 1,
        imagem: '/produto1.png',
        nomeProduto: 'Bolinho de chocolate',
        preco: 'R$ 2,50'
    },
    {
        id: 2,
        imagem: '/produto2.png',
        nomeProduto: 'Croissant',
        preco: 'R$ 2,00'
    },
    {
        id: 3,
        imagem: '/produto3.png',
        nomeProduto: 'Cupcake de chocolate',
        preco: 'R$ 1,50'
    },
    {
        id: 4,
        imagem: '/produto4.png',
        nomeProduto: 'Pudim de leite',
        preco: 'R$ 3,50'
    },
    {
        id: 5,
        imagem: '/produto5.png',
        nomeProduto: 'Donuts de leite',
        preco: 'R$ 1,50'
    },
    {
        id: 6,
        imagem: '/produto6.png',
        nomeProduto: 'Brigadeiro de colher',
        preco: 'R$ 2,00'
    },
];

function Dashboard() {
    return (
        <div className={styles.content}>
            <NavbarDashboard />
            <h1 className={styles.txtProdutos}>Confira nossos produtos</h1>
            <div className={styles.gridContainer}>
                {nomeProdutos.map(produto => (
                    <div key={produto.id} className={styles.productItem}>
                        <img src={produto.imagem} alt={produto.nomeProduto} />
                        <p className={styles.nomeProduto}>{produto.nomeProduto}</p>
                        <p className={styles.preco}>{produto.preco}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;