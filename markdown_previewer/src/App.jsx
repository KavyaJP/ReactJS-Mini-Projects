// src/App.js
import React, { useState } from "react";
import { marked } from "marked"; // Import marked
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(
    `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
`
  );

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div
        id="preview"
        // Render the parsed markdown
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

export default App;
