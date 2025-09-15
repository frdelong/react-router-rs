import { useNavigate } from 'react-router'

export function Home() {
  const navigate = useNavigate()

  function productsOpen(){
    navigate("/products")
  }

  return (
    <div>
      <h1>Página Home</h1>

      <nav>
        <a href="/products">Produtos</a>
        <a href="/products?category=tvs">Categorias</a>

        {/* <button type="button" onClick={() => navigate("/products")}>Ver produtos</button> */}
        <button type="button" onClick={productsOpen}>Ver produtos</button>
      </nav>
    </div>
  )
}