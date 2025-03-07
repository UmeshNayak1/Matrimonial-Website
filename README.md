

# Matrimonial-Website

A matrimonial website with a custom inbuilt Recommender system for finding a suitable bride or groom. Recommender system will use many paramters to find a suitable partner according to specification or data entered.

This was made for **Chitkara University** as a Project for AWS Course Subject.

```
npm start or node app.js or nodemon app.js
```

It will run under the url http://127.0.0.1:3000/ 

Email and Password for Online Website:<br>
- Admin
  - Email    : admin@gmail.com
  - Password : admin
- Users
  - 1
     - Email    : salamkhan@gmail.com
     - Password : salamkhan
   - 2
     - Email    : kareena@gmail.com
     - Password : kareena
   - 3
     - Email    : akshay@gmail.com
     - Password : akshay
     
``` Note : All Email ID are fake and used for development ```


## Pre-requisites

- Node JS (Tested on v12.14.0)
- MongooseDB
- MongooseDB Compass (Optional)
- Pre-requisites or Dependencies (Defined Below)

## Role
- Currently are there are two Roles defined.
- User
  - Update Profile
  - Search Profile
  - Use Recommeder to find parnter
- Admin
  - Manage Users

# Recommendation System
- Here we are using **Hybrid Recommendation System** combining collaborative filtering and content-based filtering.
- In this type of system more User *searches* for their partner based on **filter and criteria**, better and accurate the recommendation User are.
- It also sees and update recommendation as User click and searches a particular User which was generated from the early recommended User genersted from their data.
- Every User has their own recommendation data, which will allow every User to find their parnter on their interest. 
- Recommendation is based many factors shown in below table and how their evaluation is done.


## Schema

<h4><b>Users Schema</b></h4>

| Name                    | Type            | Required | Unique | Encrpyted |
| ----------------------- | --------------- | -------- | ------ | --------- |
| firstname               | String          | Yes      | No     | No        |
| email                   | String          | Yes      | Yes    | No        |
| gender                  | String          | Yes      | No     | No        |
| password                | String          | Yes      | No     | Yes       |
| photourl                | String          | Yes      | No     | No        |
| peronaldetails          | Reference       | Yes      | No     | No        |
| recommendationdetails   | Reference       | Yes      | No     | No        |
| type ( Role )           | String          | Yes      | No     | No        |
| isVerfied               | Bollean         | Yes      | No     | No        |
| isActive                | Bollean         | Yes      | No     | No        |

<h4><b>Personal Details Schema</b></h4>

| Name            | Type      | Required |
| --------------- | --------- | -------- |
| middlename      | String    | No       |
| lastname        | String    | Yes      |
| religion        | String    | No       |
| DOB             | String    | Yes      |
| age             | Number    | Yes      |
| mothertongue    | String    | No       |
| phoneno         | String    | No       |
| education       | String    | No       |
| height          | String    | No       |
| weight          | String    | No       |
| address1        | String    | No       |
| city            | String    | No       |
| state           | String    | No       |
| isDoingJob      | Bollean   | No       |
| user            | Reference | No       |

<h4><b>recommendation Schema</b></h4>

| Name            |     Type        |
| --------------- | --------------- |
| user            | Reference       | 
| religion        | Array of Object |
| minage          | Number          |
| maxage          | Number          |
| education       | Array of Object |

<h5><b>religion Object</b></h5>

```bash
  religion: [{
      name: {
        type: String,
      },
      count: {
        type: Number
      }
    }]
```

<h5><b>education Object</b></h5>

```bash
  education: [{
      name: {
        type: String,
      },
      count: {
        type: Number
      }
    }],
```

## Dependencies

- Express

```
npm install express
```

- EJS-Mate

```
npm install ejs-mate
```

- Path

```
npm install path
```

- Serve Favicon

```
npm install serve-favicon
```

- Connect Mongo

```
npm install connect-mongo
```

- Express-Session

```
npm install express-session
```

- Morgan

```
npm install morgan
```

- Mongoose

```
npm install mongoose
```

- Body Parser

```
npm install body-parser
```

- Dotenv

```
npm install dotenv
```

- Bcrpty

```
npm install bcrpty
```

## Directory

```bash
|___ Root
|   |--- app.js
|   |
|   |--- Procfile ( Heroku File )
|   |
|   |--- .env ( Enviroment File )
|   |
|   |--- config
|   |    |--- db.js
|   |    |--- utils.js
|   |
|   |--- Controller
|   |    |--- index.js
|   |    |--- recommendation.js
|   |    |--- users.js
|   |
|   |--- Dump (Mongoose Dump) (Dump)
|   |
|   |--- middlewares
|   |    |--- middleware.js
|   |
|   |--- Models
|   |    |--- personaldetails.js
|   |    |--- recommendation.js
|   |    |--- users.js
|   |
|   |--- Public
|   |    |--- css (Static)
|   |    |--- images (Static)
|   |    |--- script
|   |    |    |--- bootstrap.min.js
|   |    |    |--- datatables.js
|   |    |    |--- datatables.min.js
|   |    |    |--- editprofile-js.js
|   |    |    |--- home-js.js
|   |    |    |--- loginandregister.js
|   |    |    |--- manage_user-js.js
|   |    |    |--- searchpage.js
|   |
|   |--- router
|   |    |--- index.js
|   |    |--- Handlers
|   |         |--- admin.js
|   |         |--- user.js
|   |
|   |--- views
|   |    |--- partials
|   |    |    |--- navbar.ejs
|   |    |
|   |    |--- adddetails.ejs
|   |    |--- editprofile.ejs
|   |    |--- home.ejs
|   |    |--- index.ejs
|   |    |--- manage_people.ejs
|   |    |--- searchpage.ejs
|   |    |--- user.ejs
```
