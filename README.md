### Repositorio proyecto final React JS - Comisión 48250

### Desarrollado por Matías Zarria

El proyecto es un sitio web que vende las figuritas del mundial de Qatar 2022.

Para esto generé un archivo 'stickers.JSON' con +600 figuritas que está cargado en el Firebase del proyecto mediante el service visto en clase. También hay un archivo JSON reducido (solo jugadores con tres estrellas en la camiseta) que usé para las pruebas, ya que necesitaba una versión mas ágil. Con el archivo completo tuve problemas ya que la versión gratuita de Firebase permite "únicamente" 50.000 lecturas por mes, y durante las pruebas logré sobrepasar este límite y que se rompa todo el proyecto.

Los productos están separados en tres categorías: Jugadores, Escudos y Especial. La navegación del sitio se puede hacer filtrando por dichas categorías.

En la pantalla principal están todos los productos mostrando unicamente Nombre y País, mientras que al entrar al detalle, puede verse también el código para el álbum de Panini, el precio y el stock disponible. 

Se puede seleccionar una cantidad mínima de 1 y menor o igual al stock disponible, y agregar al carrito de compras. Esto puede hacerse con diversos productos, y el widget muestra la cantidad total de productos agregados.

El carrito es accesible desde toda la página mediante el widget, y desde el detalle luego de haber agregado el producto. Muestra un resumen de la compra y calcula el total a pagar. En caso de que no haya productos seleccionados, indica que está vacío.

Agregué un botón para 'Agregar mas productos' que devuelve a la Home, y uno de Finalizar compra. Este último despliega un formulario de Nombre, Apellido, Email y Teléfono (todos datos validados), y permite Confirmar la compra o cancelar.

Al confirmar la compra aparece una Toast que indica que aguardemos mientras se carga la Order en la base de datos de Firebase. Al terminar este proceso, se muestra el ID de la compra, se actualiza el stock, se vacía el carrito y se puede volver a la home para realizar otra compra. 

### Librerías utilizadas

React bootstrap     --->    para los spinners mientras cargo productos en pantalla principal o en detalle

Boostrap            --->    para el estilo general de la página (navbar, cards, buttons, etc)

Firebase            --->    para el almacenamiento de productos y orders

React-hook-form     --->    para el formulario final de compra

React-router-dom    --->    para la navegación dentro de la página con links

