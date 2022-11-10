import React from 'react';
import TitleChange from '../TitleChange/TitleChange';

const Blogs = () => {

	TitleChange('Blogs')

	
	return (
		<div>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
					<h2 className="text-2xl mb-12 font-semibold sm:text-4xl">You Know Somethings confusion Asked $ Questions.</h2>

					<div className="space-y-4">
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Different between SQL and NoSQL?</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><ul>
								<li>
									Key Differences between SQL and NoSQL.</li>
								<li> 1.
									SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.
									<li>
										2. Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.
										SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li> 3.
									SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
									<li> 4.
										Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.    </li>
								</li>
							</ul> </p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is JSON Web Token, and how does it work?</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.
								. </p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">what is the difference between javascript and node.js?</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><ul>
								<li>1. NodeJS :
									NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
								</li>
								<li>2. JavaScript :
									Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </li>
							</ul></p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does node js multiple request handle at the same time?</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">They handle 40K requests per second having Node.As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.
							</p>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blogs;