const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
// "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const address = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R.${address}, Nº: ${number}, AP: ${apartment}`);
  
  }
  
  customerInfo(order);
  
  // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00." 
  order.order.delivery.deliveryPerson = 'Luiz Silva'
  order.payment.total = 50;
  const orderModifier = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const pizza = Object.keys(order.order.pizza);
    const coca = order.order.drinks.coke.type;
    const total = order.payment.total;
    console.log(`Olá ${deliveryPerson}, o total do seu pedido de ${pizza} e ${coca} é R$ ${total},00`);
  
  }
  
  orderModifier(order);