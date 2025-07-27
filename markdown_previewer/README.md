# 📝 Markdown Previewer

A simple and responsive React single-page application for writing and previewing Markdown in real-time.

## 🚀 Live Features

- 🧠 **Two-Way Binding** – Real-time sync between the editor and the preview panel.
- 💡 **Live Markdown Rendering** – See your formatted text instantly using the `marked` library.
- 🌙 **Theme Toggle** – Switch between light and dark modes (coming soon).
- 🖥️ **Full-Screen Mode** – Expand the editor or preview for focused work (coming soon).

## 📦 Tech Stack

- **React** (via Create React App)
- **marked** (for Markdown to HTML conversion)
- **CSS** for custom styling

## 📁 Folder Structure

```
markdown-previewer/
├── public/
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🛠️ Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/markdown-previewer.git](https://github.com/your-username/markdown-previewer.git)
    cd markdown-previewer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## 🧪 Example Markdown

Try typing this in the editor to see it render in the preview pane:

```markdown
# Welcome!

**Bold text**, *italic text*, and `inline code`.

> A blockquote is a great way to highlight text.

- Create lists.
- With multiple items.
  - And indent them.

A link to [FreeCodeCamp](https://www.freecodecamp.org).
```

## 💡 Inspiration

This was a mini project focused on mastering:

- Controlled components
- React state flow
- Markdown rendering
- Clean UI layout

## 📜 License

MIT License
