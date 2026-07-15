CREATE TABLE department (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE user (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  department_id BIGINT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE supplier (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100)
);

CREATE TABLE item (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

CREATE TABLE purchase_request (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(15,2) NOT NULL,
  created DATE NOT NULL,
  user_id BIGINT NOT NULL,
  supplier_id BIGINT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (supplier_id) REFERENCES supplier(id)
);

CREATE TABLE purchase_request_items (
  purchase_request_id BIGINT NOT NULL,
  item_id BIGINT NOT NULL,
  PRIMARY KEY (purchase_request_id, item_id),
  FOREIGN KEY (purchase_request_id) REFERENCES purchase_request(id),
  FOREIGN KEY (item_id) REFERENCES item(id)
);

CREATE TABLE purchase_order (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  order_date DATE NOT NULL,
  total DECIMAL(15,2) NOT NULL,
  purchase_request_id BIGINT NOT NULL,
  FOREIGN KEY (purchase_request_id) REFERENCES purchase_request(id)
);

-- Insert some initial data
INSERT INTO department (name) VALUES ('IT'), ('HR'), ('Finance');
INSERT INTO user (name, role, department_id) VALUES ('Admin', 'ADMIN', 1);
INSERT INTO supplier (name, category) VALUES ('Acme Corp', 'Electronics');
INSERT INTO item (name, price) VALUES ('Laptop', 1200.00), ('Mouse', 25.00);
