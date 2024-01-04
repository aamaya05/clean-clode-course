(() => {

  //Single Responsibility Principle

  interface Product { 
      id:   number;
      name: string;
  }

  class ProductService {
    getProduct( id: number ) {
      console.log('Producto: ',{ id, name: 'OLED Tv' });
    }

    saveProduct( product: Product) {
      console.log('Guardando en base de datos', product );
    }
  }


  class Mailer {
    private masterEmail: string = 'alessandro@gmail.com'

    sendEmail(emails: string[], template: 'to-admins' | 'to-clients') {
      console.log('Enviando correo a los clientes');
    }


  }
  
  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    constructor(
      private productService: ProductService,
      private mailer: Mailer
    ) {}
  
      loadProduct( id: number ) {
        this.productService.getProduct( id );
      }
  
      saveProduct( product: Product ) {
        this.productService.saveProduct( product );
      }
  
      notifyClients() {
        this.mailer.sendEmail(['test@gmail.com'], 'to-clients');
      }
  
  }

  class CartBloc {

    private totalItems: Object[] = [];

    addToCart( productId: number) {
      console.log('Agregando al carrito ', productId );
    }
  }
  
const productService = new ProductService();
const mailerService = new Mailer();

  const productBloc = new ProductBloc(productService, mailerService);

  const cartBlock = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBlock.addToCart(10);








})();