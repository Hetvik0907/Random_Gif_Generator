# Random GIF Generator

A web application that allows users to generate and display random GIFs using the Giphy API.

## Features

- **Random GIF Generation**: Fetches and displays a random GIF from the Giphy API.
- **Search Functionality**: Users can search for GIFs based on specific keywords or tags.
- **Responsive Design**: Ensures a seamless experience across various devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **API**: [Giphy API](https://developers.giphy.com/)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Hetvik0907/Random_Gif_Generator.git
   cd Random_Gif_Generator
   ```

2. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:
   ```bash
   npm install
   ```

3. **Obtain Giphy API Key**:
   - Sign up at [Giphy Developers](https://developers.giphy.com/).
   - Create a new application to get your API key.

4. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your Giphy API key:
     ```
     REACT_APP_GIPHY_API_KEY=your_api_key_here
     ```

5. **Start the Application**:
   ```bash
   npm start
   ```
   The application will run at `http://localhost:3000`.

## Usage

- **Generate a Random GIF**: Click on the "Randomize" button to fetch and display a random GIF.
- **Search for a GIF**: Enter a keyword in the search box and click "Search" to display GIFs related to the entered term.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Giphy](https://giphy.com/) for providing the API to fetch GIFs.

