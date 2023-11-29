import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body> 
      
      <div className="main"> 

      <h2>Lab 10 C - Shrey Mistry</h2>

      <div className="container"> 
    <h3>How I installed React.js</h3> 
    <p>
        Installing React.js on a Windows computer with Visual Studio Code was a straightforward process. 
        I followed these steps to install React.js and create a new React app:
        
    </p>

        <ol>
            <li>
                <b>Install Node.js:</b> React.js requires Node.js to be installed. 
                I downloaded and installed the latest version of Node.js from the official website: 
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a>.
            </li>

            <li>
                <b>Install Create React App:</b> I then opened the VSCode terminal and ran the following command to install 
                the Create React App tool:
                <pre>
                    <code>npm install -g create-react-app</code>
                </pre>
            </li>

            <li>
                <b>Create a New React App:</b> Once the installation was complete, I used this command to create 
                a new React app:
                <pre>
                    <code>npx create-react-app lab10c</code>
                </pre>
            </li>

            <li>
                <b>Navigate to the App Directory:</b> I then changed the terminal to be in the app directory:
                <pre>
                    <code>cd lab10c</code>
                </pre>
            </li>

            <li>
                <b>Run the App:</b> Finally, I started the development server and open the app in my default browser:
                <pre>
                    <code>npm start</code>
                </pre>
            </li>
        </ol>

    <p>
        This is how I installed React.js and created a new React app. 
        I then started building this page in the <code>src</code> folder.
    </p>
</div>

      
      <div className="container"> 
        <h3>How I built this page.</h3> 

        <p> 
            Building this page was very straightforward. There were 3 steps to this:
        </p>

        <ol> 
          <li>
            <b>Make the HTML code for this page:</b> Inside of App.js, I added HTML code to the page. This site consists of many headers,
            divs, paragraphs, and ordered lists, to display these steps.
          </li>
          <li>
            <b>Add CSS styling for this page:</b> Inside the index.css file, I added styling to the elements on this page.
          </li>
          <li>
            <b>Host this page:</b> I am hosting this page using GitHub pages, which requires some steps.
             I followed <a href='https://github.com/gitname/react-gh-pages'>this guide.</a>
          </li>
        </ol>

        <p>With that, this page was built.</p>

      </div>

      <div className="container"> 
        <h3>Difficulties encountered.</h3> 
        <p>
            I did not encounter any difficulties while building this page. 
            I have used React.js before, and I have also used HTML and CSS before, so I was able to build this page without any issues.
        </p>
      </div>

      </div>

    </body>
  );
}

export default App;
