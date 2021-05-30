import { toast } from "react-toastify";

const products = [
  {
    price: 10.99,
    _id: 1,
    name: "random1 Salad",
    menuid: "2",
    image: {
      default:
        "https://www.cfacdn.com/img/order/menu/Online/Salads%26wraps/Lemon_Kale_Salad_1080.png"
    },
    nutritions: { calories: 450, fats: 10, protein: 40 },
    description:
      "Sed urna urna, semper sit amet velit condimentum, vulputate congue ligula. Vestibulum at consequat dolor, id viverra lacus. Aenean tincidunt laoreet mattis. Aliquam porttitor vestibulum faucibus. In risus leo, sollicitudin eget lacinia vitae, hendrerit ac tellus. Sed nec odio vestibulum ex lobortis euismod. Aliquam sit amet justo at leo fermentum molestie ut quis urna. Sed ut justo malesuada, accumsan orci sit amet, viverra enim. Suspendisse nec dignissim metus. Sed nec justo convallis, interdum augue sed, euismod massa. Sed mattis, massa sit amet tempor semper, massa lectus consectetur enim, ut ultricies mauris sem tincidunt lorem. Nam feugiat lectus dolor, eget feugiat enim gravida at. Quisque vulputate dolor quis gravida consequat"
  },
  {
    price: 10.99,
    _id: 2,
    name: "Turkey Bacon  Salad",
    menuid: "2",
    image: {
      default:
        "https://www.cfacdn.com/img/order/menu/Online/Salads%26wraps/marketSalad_grilled_pdp.png"
    },
    nutritions: { calories: 350, fats: 10, protein: 40 },
    description:
      "Sed urna urna, semper sit amet velit condimentum, vulputate congue ligula. Vestibulum at consequat dolor, id viverra lacus. Aenean tincidunt laoreet mattis. Aliquam porttitor vestibulum faucibus. In risus leo, sollicitudin eget lacinia vitae, hendrerit ac tellus. Sed nec odio vestibulum ex lobortis euismod. Aliquam sit amet justo at leo fermentum molestie ut quis urna. Sed ut justo malesuada, accumsan orci sit amet, viverra enim. Suspendisse nec dignissim metus. Sed nec justo convallis, interdum augue sed, euismod massa. Sed mattis, massa sit amet tempor semper, massa lectus consectetur enim, ut ultricies mauris sem tincidunt lorem. Nam feugiat lectus dolor, eget feugiat enim gravida at. Quisque vulputate dolor quis gravida consequat"
  },
  {
    price: 10.99,
    _id: 3,
    name: "Codd Egg  Salad",
    menuid: "2",
    image: {
      default:
        "https://www.cfacdn.com/img/order/menu/Online/Salads%26wraps/cobbSalad_Grilled_pdp.png"
    },
    nutritions: { calories: 460, fats: 10, protein: 50 },

    description:
      "Sed urna urna, semper sit amet velit condimentum, vulputate congue ligula. Vestibulum at consequat dolor, id viverra lacus. Aenean tincidunt laoreet mattis. Aliquam porttitor vestibulum faucibus. In risus leo, sollicitudin eget lacinia vitae, hendrerit ac tellus. Sed nec odio vestibulum ex lobortis euismod. Aliquam sit amet justo at leo fermentum molestie ut quis urna. Sed ut justo malesuada, accumsan orci sit amet, viverra enim. Suspendisse nec dignissim metus. Sed nec justo convallis, interdum augue sed, euismod massa. Sed mattis, massa sit amet tempor semper, massa lectus consectetur enim, ut ultricies mauris sem tincidunt lorem. Nam feugiat lectus dolor, eget feugiat enim gravida at. Quisque vulputate dolor quis gravida consequat"
  },
  {
    price: 15.99,
    _id: 4,
    name: "Black Beans Bacon avocado ",
    menuid: "1",
    image: {
      default:
        "https://www.pngarts.com/files/4/Burger-King-Transparent-Image.png"
    },
    nutritions: { calories: 450, fats: 10, protein: 43 },
    description:
      "Sed urna urna, semper sit amet velit condimentum, vulputate congue ligula. Vestibulum at consequat dolor, id viverra lacus. Aenean tincidunt laoreet mattis. Aliquam porttitor vestibulum faucibus. In risus leo, sollicitudin eget lacinia vitae, hendrerit ac tellus. Sed nec odio vestibulum ex lobortis euismod. Aliquam sit amet justo at leo fermentum molestie ut quis urna. Sed ut justo malesuada, accumsan orci sit amet, viverra enim. Suspendisse nec dignissim metus. Sed nec justo convallis, interdum augue sed, euismod massa. Sed mattis, massa sit amet tempor semper, massa lectus consectetur enim, ut ultricies mauris sem tincidunt lorem. Nam feugiat lectus dolor, eget feugiat enim gravida at. Quisque vulputate dolor quis gravida consequat"
  },
  {
    price: 15.99,
    name: "Kiwi Smoothy",
    menuid: "3",
    _id: 5,
    image: {
      default: "https://www.pngarts.com/files/4/Juice-Transparent-Image.png"
    },
    nutritions: { calories: 450, fats: 10, protein: 43 },
    description:
      "Sed urna urna, semper sit amet velit condimentum, vulputate congue ligula. Vestibulum at consequat dolor, id viverra lacus. Aenean tincidunt laoreet mattis. Aliquam porttitor vestibulum faucibus. In risus leo, sollicitudin eget lacinia vitae, hendrerit ac tellus. Sed nec odio vestibulum ex lobortis euismod. Aliquam sit amet justo at leo fermentum molestie ut quis urna. Sed ut justo malesuada, accumsan orci sit amet, viverra enim. Suspendisse nec dignissim metus. Sed nec justo convallis, interdum augue sed, euismod massa. Sed mattis, massa sit amet tempor semper, massa lectus consectetur enim, ut ultricies mauris sem tincidunt lorem. Nam feugiat lectus dolor, eget feugiat enim gravida at. Quisque vulputate dolor quis gravida consequat"
  }
];
export function foodReducer(state = products, action) {
  const payload = action;
  switch (action.type) {
    default:
      return state;
  }
}
