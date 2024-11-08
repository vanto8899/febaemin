model User {
  id        Int      @id @default(autoincrement())
  name      String
  username  String   @unique // Thêm username và đảm bảo không trùng lặp
  email     String   @unique
  phone     String?  // Thêm số điện thoại (có thể null)
  address   String?  // Thêm địa chỉ (có thể null)
  password  String
  role      Role     // Admin or Customer
  cart      Cart?    // One-to-one relationship with Cart (có thể null)
  orders    Order[]  // One-to-many relationship với Order
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  CUSTOMER
  ADMIN
}

////

model Category {
  id          Int         @id @default(autoincrement())
  name        String
  imageUrl     String?
  restaurants Restaurant[] // One-to-many relationship with restaurants
}
////

model Restaurant {
  id         Int       @id @default(autoincrement())
  name       String
  address    String
  categoryId Int
  category   Category  @relation(fields: [categoryId], references: [id])
  dishes     Dish[]    // One-to-many relationship with dishes
  orders     Order[]   // One-to-many relationship with orders
}
///

model Dish {
  id           Int        @id @default(autoincrement())
  name         String
  description  String?
  price        Float
  imageUrl     String?
  restaurantId Int
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id])
  cartItems    CartItem[] // One-to-many relationship with CartItem
  orderItems   OrderItem[] // One-to-many relationship with OrderItem
}
///

model Cart {
  id        Int         @id @default(autoincrement())
  userId    Int
  user      User        @relation(fields: [userId], references: [id])
  cartItems CartItem[]  // One-to-many relationship with CartItem
}
///

model CartItem {
  id      Int     @id @default(autoincrement())
  cartId  Int
  cart    Cart    @relation(fields: [cartId], references: [id])
  dishId  Int
  dish    Dish    @relation(fields: [dishId], references: [id])
  quantity Int
}
///

model Order {
  id           Int         @id @default(autoincrement())
  userId       Int
  user         User        @relation(fields: [userId], references: [id])
  restaurantId Int
  restaurant   Restaurant  @relation(fields: [restaurantId], references: [id])
  totalPrice   Float
  status       OrderStatus @default(PENDING)
  orderItems   OrderItem[] // One-to-many relationship with OrderItem
  paymentMethod PaymentMethod // Thêm phương thức thanh toán
  note          String?       // Thêm ghi chú từ user
  createdAt    DateTime    @default(now())
  updatedAt    DateTime    @updatedAt
}

enum PaymentMethod {
  CASH
  CREDIT_CARD
  ONLINE
}
///

model OrderItem {
  id       Int    @id @default(autoincrement())
  orderId  Int
  order    Order  @relation(fields: [orderId], references: [id])
  dishId   Int
  dish     Dish   @relation(fields: [dishId], references: [id])
  quantity Int
  price    Float
}


//nest new .
//sudo npm i -g prisma
//npx prisma init
//yarn add @nestjs/config
//npx prisma migrate dev --name init-database
//npx prisma generate //chay sao moi la thay doi schema
//co the cai them npx prisma studio // view data :5555
//yarn add prisma @prisma/client
