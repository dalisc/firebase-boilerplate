# Setting up NodeJS & Firebase

## Installations

### Installing an IDE

If you don't already have a preferred IDE, we recommend installing VSCode
https://code.visualstudio.com/download

### Installing Git

**Windows**

https://git-scm.com/download/win

**Linux (Ubuntu)**

```
$ sudo apt install git-all
```

**Mac Mavericks(10.9) and up**

```
$ git --version
```

Running this command from the terminal will prompt you to install it, if it doesn't already exist

**Troubleshooting**

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Installing Node JS

**Windows**

Using the windows installer from the NodeJS Website

https://nodejs.org/en/download/

**Mac / Linux**

Using nvm (Node Version Manager)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Troubleshooting: https://github.com/nvm-sh/nvm

### Installing Firebase Tools

Using npm (node package manager)

```
npm install -g firebase-tools
```

Troubleshooting: https://github.com/firebase/firebase-tools

## Setup

### Creating a Firebase Project

Visit the firebase console and create a new project

https://console.firebase.google.com/

**Step 1**

<img src='./assets/firebase-create.png' width=400/>

Click `Add Project`

**Step 2**

<img src='./assets/name.png' width = 600/>

Name your project

**Step 3**

<img src='./assets/analytics-setup.png' width = 800/>

Click `Continue`

**Step 4**

<img src='./assets/complete-create.png' width=800/>

Select `Default Account for Firebase` and Click `Create Proeject`

**Step 5**

<img src='./assets/ready.png' width=600/>

Click `Continue`

**Step 6**

<img src='./assets/firestore.png' width=800/>

Select `Cloud Firestore` from the sidebar and Click `Create Database`

**Step 7**

<img src='./assets/rules.png' width=800/>

These are the security rules for the db, just Click `Next`

**Step 8**

<img src='./assets/location.png' width=800/>

No need to change the location, just Click `Next`

**Step 9**

<img src='./assets/empty.png' width=800/>

Your Cloud Firestore has been initialized

## Deploying "Hello World" Backend

### Clone Boilerplate Repository

Visit https://github.com/cfg-workshop/firebase-boilerplate

<img src='./assets/clone.png' width=800/>

Click `Code` and copy the HTTPS url

Pick a workspace for your project and open a terminal in your workspace directory

Then, run the following command in your workspace

```
git clone url-you-just-copied
```

### Connect Codebase to Firebase Project

After cloning the project, you'll see many files such as `.firebaserc` `.gitignore` ...(more) and folders such as `assets/`, `public/` and `functions/`.

- `assets/` contains the images you see in this readme, so you can just ignore it
- `public/` contains the static website that we will be using as our documentation and api playground
- `functions/` contains your backend server

To connect this codebase to your own firebase project run the following command in your workspace

```
firebase use --add
```

Select your `project-id` from the dropdown presented

Create an alias called `default`

If you face any issues, it may be because you're not logged in. Running the following command may help

```
firebase login
```

Example:

<img src='./assets/example.png' width=800/>

### Deploy your server

First let's make sure that all dependencies are installed. Navigate to the `functions/` folder in your terminal and run the following command

```
npm install
```

Now you can deploy by running the following command

```
firebase deploy
```

If the deployment was successful, you will see something like this in your terminal. The URLs you see will be different as it is dependent on your personal firebase project

<img src='./assets/deploy.png' width=800/>

`Project Console` is the console for your backend server. Over here you can see the logs and usage statistics of your server

`Hosting URL` is the website where your backend documentation and api playground is hosted. The API playground would not work right now, as the api is not yet implemented in this boilerplate. We will work on this together during the workshop

## Conclusion

Congrats, you're done! That's all the pre-work you need for the NodeJS and Firebase Workshop

If you're curious and want to read more on the tools we're using, you can visit these links:

- Firebase Cloud Functions: https://firebase.google.com/docs/functions
- Firebase Cloud Firestore: https://firebase.google.com/docs/firestore
- Express Framework for NodeJS: https://expressjs.com/
- Swagger UI Express: https://www.npmjs.com/package/swagger-ui-express
- Swagger JSDoc: https://github.com/Surnet/swagger-jsdoc
