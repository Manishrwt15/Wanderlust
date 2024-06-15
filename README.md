# Wanderlust

Wanderlust is a full-stack web application that replicates the core functionalities of Airbnb, allowing users to list and book properties.

## Technologies Used
- **Frontend**: JavaScript, EJS templating, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloudinary**: For image storage and management
- **Authentication**: User authentication and authorization

## Features
- User authentication and authorization
- Property listings with photo management via Cloudinary
- CRUD operations for listings
- Responsive design with Bootstrap

## Installation and Running Locally

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Instructions
1. Clone the repository:
    git clone https://github.com/Manishrwt15/Wanderlust.git
   
3. Navigate to the project directory:
    cd Wanderlust
   
4. Install dependencies:
    npm install
   
5. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following environment variables:
      CLOUDINARY_CLOUD_NAME=your_cloud_name
      CLOUDINARY_API_KEY=your_api_key
      CLOUDINARY_API_SECRET=your_api_secret
      MONGODB_URI=your_mongodb_uri
      SESSION_SECRET=your_session_secret
    
6. Start the application:
    npm start

7. Visit `http://localhost:3000` in your browser to see the application.

## Approach
The project follows the MVC (Model-View-Controller) architecture:
- **Models**: Define the structure of the database using Mongoose.
- **Views**: Use EJS for server-side rendering of HTML.
- **Controllers**: Handle HTTP requests and application logic.

### Known Issues or Limitations
- No payment integration
- Basic styling with Bootstrap, could be improved for a more modern look
- Limited search and filter functionality

## Deployment
The application is deployed and can be accessed [here](https://wanderlust-fqvy.onrender.com/listings).

## Contributing
Feel free to submit issues or pull requests for improvements or new features.

## License
This project is licensed under the MIT License.
