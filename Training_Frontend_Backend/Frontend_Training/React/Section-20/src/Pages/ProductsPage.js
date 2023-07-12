import {Link} from 'react-router-dom';

const PRODUCTS=[
    {'id':'p1','title':'product-1'},
    {'id':'p2','title':'product-2'},
    {'id':'p3','title':'product-3'},
    {'id':'p4','title':'product-4'}
]

function ProductsPage() {
  return (<>
  <h1>Welcome to products page</h1>
  <ul>{
  PRODUCTS.map((product)=>(<Link to={`/products/${product.id}`}><li key={product.id}>{product.title}</li></Link>))
   }
  </ul>
  </>
  );
}

export default ProductsPage;
