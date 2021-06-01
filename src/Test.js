import React from 'react';

const Test = () => {
    return (
        <main>
        <form action="http://www.torrentbd.com"></form>

        <form method="POST" action="#">
            <input type="text" name="UserName" /> <br/>
            <input type="password" name="Password" /> <br/>
            <input type="submit" name="submit" /> <br/><br/>
        </form>

        <form>
            <input type="radio" name="gender" value="male" /> Male <br/>
            <input type="radio" name="gender" value="female" /> Female <br/>
            <br/>

            <input type="checkbox" name="color" value="red" /> Red <br/>
            <input type="checkbox" name="color" value="green" /> Green <br/>
            <br/>

            <p>Enter Your Name :  <input type="text" name="UserName" /></p>
            <p>Enter Your Password : <input type="password" name="Password" /></p>
            
            <p>Select Your Gender</p>
            <input type="radio" name="gender" value="male" /> Male <br/>
            <input type="radio" name="gender" value="female" /> Female <br/>

            <p>Select Your Favourite Color</p>
            <input type="checkbox" name="color" value="red" /> Red <br/>
            <input type="checkbox" name="color" value="green" /> Green <br/>
            <br/>
        </form>
    </main>    
    );
}

export default Test;