# **FarmStock Frontend Documentation**

## **Navbar**

### **Features:**

- **Add Stock** and **Create Invoice** buttons.
- **Cart**: Displays all added items in the cart.
- **Install Button**: Allows users to install the app as a Progressive Web App (PWA).
- **Notifications**: Displays important alerts.

---

## **1. Dashboard Component**

📌 **File:** `pages/dashboard.jsx`

📌 **Purpose:** Displays sales analytics and pending credits.  
📸 **Image Reference:**  
![Dashboard Component](<images/dashboard(%20sales).png>)

### **Features:**

- Displays **total sales, pending credits, low stock alerts,** and **expiring stock warnings**.

---

## **2. Inventory Component**

📌 **Purpose:** Manages stock details, product addition, and stock updates.  
📸 **Image Reference:**  
![Inventory Component](<images/total%20products%20(all).png>)

### **Features:**

- Lists **all products with quantities**.
- Highlights **low stock and out-of-stock items**.
- Allows **editing and updating** stock levels.
- Enables **adding new products**.
- Provides **search and filtering options**.

### **APIs Used:**

- **GET** `/stock_details/` → Fetch stock details.
- **POST** `/add_purchase_and_stock/` → Add purchases and update stock.

---

## **3. Sales Component**

📌 **Purpose:** Manages sales invoices and sold products.  
📸 **Image Reference:**  
![Sales Component](images/sales%20invoice.png)

### **Features:**

- Lists **recent sales and invoices**.
- "**Generate Bill**" button for creating invoices.

### **APIs Used:**

- **GET** `/create_invoice_number/` → Generates invoice number for recent sales.
- **GET** `/get_invoice_detail/` → Retrieves invoice details.
- **GET** `/get_invoice_summary/` → Fetches invoice summary.

📸 **Additional Image Reference:**  
![Sold Product & Invoice](images/sold.png)

- **POST** `/sold_product/` → Processes sold products and updates "My Orders".
- **POST** `/create_invoice/` → Finalizes invoice creation.

---

## **4. Purchase Component**

📌 **Purpose:** Tracks **purchase orders** and **supplier details**.  
📸 **Image Reference:**  
![Purchase Component](images/purchase%20orders.png)

### **Features:**

- Lists **purchase orders** (e.g., `#PO-2023-001`).
- Displays **supplier details, order dates, and order statuses**.

### **APIs Used:**

- **GET** `/get_purchase_invoice_detail/` → Fetches purchase invoice details.
- **GET** `/get_purchase_invoice_summary/` → Retrieves summary of recent purchases.

---

## **5. Credits Component**

📌 **Purpose:** Manages **credit accounts** and **payment timelines**.  
📸 **Image Reference:**  
![Credits Component](images/credit.png)

### **Features:**

- Displays **overdue amounts, due dates, and customer details**.
- Provides **"Record Payment"** and **"Send Reminder"** actions.

---

This documentation provides a structured and clear guide for frontend developers working on FarmStock, ensuring consistency in UI and API interactions.
