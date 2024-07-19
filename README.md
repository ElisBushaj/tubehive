# Tubehive Frontend

Welcome to Tubehive! This is the frontend of Tubehive, a Vite-based application that allows you to search for YouTube videos, view results, and download them as MP3 files. You can also directly paste the URL of a YouTube video and download it as an MP3. Below, you'll find the steps to set up and run this application on your local machine.

## Features

- **Search YouTube Videos**: Search for YouTube videos and view the results.
- **Download MP3**: Download YouTube videos as MP3 files.
- **Direct URL Input**: Paste the URL of a YouTube video and download it directly as an MP3.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- npm (Node Package Manager) or yarn installed

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ElisBushaj/tubehive.git
   cd tubehive
   ```

2. **Install Dependencies**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

   or, if you prefer yarn:

   ```bash
   yarn install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory of the project and add the following environment variable:

   ```plaintext
   VITE_API=http://localhost:4000
   ```

   Replace `http://localhost:4000` with the URL of your backend API.

## Usage

To start the development server, run:

```bash
npm run dev
```

or, if you prefer yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build, run:

```bash
npm run build
```

or, if you prefer yarn:

```bash
yarn build
```

This will create a `dist` directory with the production build of the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or need further assistance, feel free to contact me at elisbushaj2@gmail.com.

---

Thank you for using Tubehive! Enjoy your music!
