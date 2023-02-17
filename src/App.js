import './App.css';
import React, { useState } from "react";
import Preview from "./Preview";
import horseImg from "./horse.png"

function App() {

  const [text, setText] = useState(`# Greetings and salutations!
## Welcome to the <mark>Markdown Previewer</mark>

where you can ***preview your markdown*** in all its glory!

you can add some <kbd>code</kbd>:

\`console.log("Hello, world!")\`
  
\`\`\`
function greeting(name) {
  return "Hello, " + name + "!";
}
\`\`\`

- you can list some item
- and another item
  1. and one more
  2. and the last one

> You can write blockquotes like this
>> and even like this!
    
![Image](${horseImg})

- [x] now just have a look at this cool horse
- [ ] and now try to write some markdown yourself

[made by uuuuuvika](https://github.com/uuuuuvika)
`);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="app">
      <div className="working-area-box">
        <textarea value={text} onChange={handleChange} id="editor"></textarea>
      </div>
      <div className="working-area-box">
        <Preview text={text} />
      </div>
    </div>
  );
}

export default App;
