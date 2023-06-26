# EZ List

## Description
  For Project 2 we decided to make a full-stack list application, where you are able to make different lists. Now the user making the items for list has the choice to put how important that certain note is. The user is also able to edit the list title and also has the ablity to delete the items off the list. Finally, the user is able to send certain list to friends and family through gmail for example, if your shopping but forgot the list someone at home can send you this list with how important what food items are. You are able to browse or search through users and see what list they have. We tried to make it easier to keep track of what is most important in your notes.

## Table of Contents
* [User Story](#user-story)
* [Usage](#usage)
* [Future Deployment](#future-deployment)
* [Tech](#tech)
* [Screenshots](#screenshots)
* [Questions](#questions)

## User Story
```
AS A User
I WANT to save items to lists.
SO THAT I can come back and view the list to keep track of my notes.
```
## Usage
1. Open terminal
2. Run `mysql -uroot -p` then enter password :)
3. Type `quit`
4. Create a `.env` file, contain the following:
```
DB_NAME='ezlist_db'
DB_PASSWORD=''
DB_USER=''
SESSION_SECRET=''
EMAIL='helloezlist@gmail.com'
PASSWORD='chhiqcvjriedxbhd'

```
5. Run `Server.js`
6. Open `localhost:3001`

## Future Deployment
* I would like to add the feature to be able to edit items and change the items itself and how important it is
* Being able to add other users and be able to share one big list that everyone is able to add on to
* Having the ablity to have a dark and light mode
* Being able to see your recently deleted notes/items

## Tech
### NPM Packages
```
- connect-session-sequelize
- dotenv
- express
- express-handlebars
- express-session
- mysql2
- nodemailer
- sequelize
```
## Screenshots
<img width="1440" alt="Screenshot 2023-06-26 at 2 33 16 AM" src="https://github.com/TianPnce/project-list/assets/122128252/c7c91564-50d7-45c2-838d-828dadbea800">
<img width="1440" alt="Screenshot 2023-06-26 at 2 29 46 AM" src="https://github.com/TianPnce/project-list/assets/122128252/1d808a61-9d07-43f3-8eac-eeff4c5e5ae7">
<img width="1440" alt="Screenshot 2023-06-26 at 2 31 30 AM" src="https://github.com/TianPnce/project-list/assets/122128252/2d1fd4fe-837e-49b4-ba11-51330eea9e4c">
<img width="1110" alt="Screenshot 2023-06-26 at 2 34 45 AM" src="https://github.com/TianPnce/project-list/assets/122128252/5236a7ba-8bd5-4d92-85c5-9eef7979812d">

## Questions
[TianPnce](https://github.com/TianPnce)
