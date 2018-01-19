#  Crypto Tracker

### Project Stricture / Features - M.V.P
- [x] View Top Trending Coins
- [ ] Connect and View EtherWallet
- Users can:
    - [x] Login/SignUp
    - [x] Track Assets/Transactions
- [ ] View A Single Coin Overview
- [ ] Integrate Visualization of Coin Value



## Installation 
1. Run yarn install in the client folder.
2. in the same client folder run yarn start
4. Navigate to client/src/config/
5. In this folder you should see firebaseui.js, you will also need a firebase.js file.
6. Register an application with anyname on firebase and copy the code necessary to connect your web app to firebase and paste it in firebase.js
    ```javascript
        import * as firebase from 'firebase';
        // Initialize Firebase
        var config = {
            apiKey: "insert-here",
            authDomain: "insert-here",
            databaseURL: "insert-here",
            projectId: "insert-here",
            storageBucket: "insert-here",
            messagingSenderId: "insert-here"
            };
            
        firebase.initializeApp(config);
        export default firebase;
    ```
7. In the root folder of the project run npm install to install back end dependencies

### Screenshots

<!-- #### Register as a brand
![Register As a Brand](./assets/brand-create.png?raw=true "Brand Create")

#### Upload A Clothing Item
![Upload A Clothing Item](./assets/upload-page.png?raw=true "Product Create")

#### Login Page
![Login page](./assets/login-page.png?raw=true "Login page")

#### View Clothing Items of A Brand
![Product Page](./assets/product-page-as-user.png?raw=true "Product page")

### Feed for Articles
![Articles](./assets/articles-feed.png?raw=true "Article Feed") -->

### Technical Discussion
Tech Stack
* HTML / CSS (SASS)
* JavaScript
* Material Design
* CoinMarket Cap API
* React.js
* Google Firebase(Authentication, Storage, Database)

## Code Snippet

```javascript

```
### Future Improvements