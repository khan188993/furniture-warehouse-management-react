import React from "react";

const BlogPage = () => {
    return (
        <div>
            <h1 className="text-center mb-4 mt-4">BlogPage</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-12">
                    <div>
                <h2>1- Difference between javascript and nodejs.</h2>
                <p>
                Javascript is a programming language that is used for writing scripts on the website. But NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers. We can run Javascript outside the browser with the help of NodeJS. Javascript is used in frontend development. Nodejs is used in server-side development.
                </p>
                <h2>2- When should you use nodejs and when should you use mongodb</h2> 
                <p>NodeJS and MongoDB are two different process. Here I tried to explain as simpler as possible. Shortly we can say, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development. But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data. The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site. Suppose you are building a website and you need a database to store the data or information so here you can use MongoDB but to be connected with MongoDB you need a connector, so here you can use NodeJS which will help your website to run outside of server.</p>
                <h2>3- Differences between sql and nosql databases.</h2>
                <p> SQL databases defines and manipulates data based structured query language (SQL). A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. </p>
                <h2>4- What is the purpose of jwt and how does it work</h2>
                <p>JWTs are used as a secure way to authenticate users and share information. A common way to use JWTs is as OAuth bearer tokens. In this example, an authorization server creates a JWT at the request of a client and signs it so that it cannot be altered by any other party. The client will then send this JWT with its request to a REST API. The REST API will verify that the JWT’s signature matches its payload and header to determine that the JWT is valid. When the REST API has verified the JWT, it can use the claims to either grant or deny the client’s request.</p>
            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
