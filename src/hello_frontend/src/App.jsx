import { useState } from 'react';
import { hello_backend } from 'declarations/hello_backend';

function App() {
  
  

    return (
      <div align="center" style={{ backgroundColor: 'green' }}>
        <h1>CRT_IT Enquiry Form</h1>
        <form style={{
          backgroundColor: 'azure',
          maxWidth: '500px',
          margin: '50px auto',
          padding: '30px 20px',
          textAlign: 'left'
        }}>
          <div>
            <label>NAME</label><br />
            <input type="text" name="name" placeholder="Enter your name" required /><br /><br />
            <label>EMAIL</label><br />
            <input type="email" placeholder="Enter your email" /><br /><br />
            <label>Age</label><br />
            <input type="number" placeholder="Enter your age" /><br /><br />
            <label>Which option best describes you?</label><br />
            <select name="userType">
              <option value=""></option>
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
              <option value="Child">Child</option>
            </select><br /><br />
            <label>Would you recommend this training to a friend?</label><br />
            <input type="radio" name="recommend" value="YES" /> YES
            <input type="radio" name="recommend" value="NO" /> NO
            <input type="radio" name="recommend" value="MAYBE" /> MAYBE <br /><br />
            <label>Languages and Frameworks Known (Check all that apply)</label><br />
            <input type="checkbox" name="languages" value="C" /> C
            <input type="checkbox" name="languages" value="C++" /> C++
            <input type="checkbox" name="languages" value="C#" /> C#
            <input type="checkbox" name="languages" value="Java" /> Java
            <input type="checkbox" name="languages" value="Python" /> Python
            <input type="checkbox" name="languages" value="JavaScript" /> JavaScript
            <input type="checkbox" name="languages" value="React" /> React
            <input type="checkbox" name="languages" value="Angular" /> Angular
            <input type="checkbox" name="languages" value="Django" /> Django
            <input type="checkbox" name="languages" value="Spring" /> Spring <br /><br />
            <label>Any comments or suggestions</label><br />
            <textarea name="comments"></textarea> <br /><br />
            <button style={{
              textAlign: 'center',
              color: 'black',
              boxShadow: 'violet',
              borderRadius: '20px',
              fontFamily: 'inherit',
              display: 'block',
              width: '100%',
              backgroundColor: 'lightseagreen'
            }}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
  
  
export default App;
