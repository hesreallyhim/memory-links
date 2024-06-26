
# Memory-Links

Memory-Links is a full-stack web application that helps users create mnemonic devices for memorizing lists of words or phrases. It features a drag-and-drop interface for organizing items and generates simple mnemonic links.

## Features

- Add words or short phrases to a list
- Drag and drop to reorder list items
- Delete items from the list
- Generate mnemonic links for the entire list
- Light and dark theme toggle

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- react-beautiful-dnd for drag and drop functionality

### Backend
- Python (FastAPI - planned)

## Project Structure

```
memory-links/
├── ui/                 # Frontend Next.js application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Next.js pages
│   │   └── styles/     # Global styles
│   ├── public/         # Static assets
│   ├── package.json
│   └── tsconfig.json
├── server/             # Backend Python application (planned)
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (recommended - v20.15.0)
- Yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/memory-links.git
   cd memory-links
   ```

2. Install frontend dependencies:
   ```
   cd ui
   yarn install
   ```

3. Start the development server:
   ```
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Development

- Run `yarn dev` in the `ui` directory to start the frontend development server.
- Run tests with `yarn test` (once tests are implemented).
- Lint your code with `yarn lint`.

## Deployment

(Add deployment instructions once they are finalized)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
