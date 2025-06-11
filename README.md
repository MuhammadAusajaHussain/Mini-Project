# Express Mini-Project

This is a mini built with **Express** and **EJS** templating to demonstrate routing and dynamic page rendering. Moreover, it utilizes Tailwind CSS and Chart.js to display statistics and charts for different entities.

## 🔧 Features

### 🧑‍💻 Users Page
- Displays a table of all users.
- Shows statistics:
  - Total, Active, Inactive users.
  - Unique roles.
- Includes a **bar graph** to visualize user count by role.

### 🍎 Fruits Page
- Displays a table of all fruits available
- Shows statistics:
  - Total Fruits available
  - Average Price per kg
  - Fruits in season

### 🦸 Superheroes Page
- Lists superheroes with their:
  - Real names, aliases, powers, origins, teams, and activity status.
- Includes a **pie chart** showing superheroes grouped by team.

## 🛠 Tech Stack

| Tech         | Purpose                        |
|--------------|--------------------------------|
| Node.js      | Backend runtime                |
| Express      | Server framework               |
| EJS          | Templating engine              |
| Tailwind CSS | Responsive, utility-first UI   |
| Chart.js     | Data visualization (charts)    |

## 🚀 Getting Started

### 1. Clone the Repository
```
git clone https://github.com/MuhammadAusajaHussain/Mini-Project.git
cd your-repo-name
```

### 2. Install Dependencies
```
npm install
```

### 3. Run application
```
node index.js
```
The app will be available at: http://localhost:8080

## 📁 Project Structure
- data/
  - fruits.js
  - superheros.js
  - users.js
- views/
  - partials/
    - footer.ejs
    - header.ejs
  - fruits.ejs
  - home.ejs
  - superheros.ejs
  - users.ejs
- index.js
- package-lock.json
- package.json
- README.md

## 📸 Screenshots

### 1. Users Page
![image](https://github.com/user-attachments/assets/fe7c9599-436e-42c5-8c8a-0874c285f99a)

### 2. Fruits Page
![image](https://github.com/user-attachments/assets/242373cc-2635-40db-b2be-4ff4ca33f03e)

### 3. Superheros Page
![image](https://github.com/user-attachments/assets/12a44521-d92b-4154-9cbf-ad5fef31b7e7)

## 📦 Dependencies
```
"dependencies": {
    "ejs": "^3.1.10",
    "express": "^5.1.0"
}
```
