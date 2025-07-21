
import React, { useState } from "react";


function Home() {
    var name = "kaushik";
    let k = 100;
    let m = 300;
    let handleLogin = () => {
        alert("Login Successful! 🎉");
    };
    return (<>
    <div className="row">
        <div className="col-6"><div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div></div>
    </div>
        <div className="dog text-center "><img src="img/hero-dog.png"></img></div>
        <h1>Home Page</h1>

        <h2 className="price"> price ₹{m - k}  <del>₹{k + m}</del> </h2>
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus eum ut ducimus adipisci pariatur officiis iure sequi ab aperiam facere magnam sapiente sed obcaecati et est, debitis qui eaque.</p>
        <form action="">

            <tr>
                <td><label htmlFor="">Name : </label></td>
                <td>
                    <input type="text"
                        placeholder="Username"
                        className="w-full outline-none"
                        required /></td>
            </tr>

            <tr>
                <td><label htmlFor="">Email : </label></td>
                <td> <input type="text"
                    placeholder="Email"
                    className="w-full outline-none"
                    required /></td>
            </tr>

            <tr>
                <td><label htmlFor="">Moblie No : </label></td>
                <td>  <input type="tel"
                    placeholder="Email"
                    className="w-full outline-none"
                    maxLength={10}

                    title="Mobile number must be 10 digits"
                    required /></td>
            </tr>
        </form>
        <div className="text-center mt-4">
            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Login
            </button>
        </div>
    </>);
}
export default Home;