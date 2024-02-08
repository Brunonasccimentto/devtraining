# Dev Training
### Installation
1. Clone the repository:
```bash
$ git clone https://github.com/Brunonasccimentto/devtraining.git
```
2. Install the necessary dependencies:
```bash
$ npm install
```
3. Clone the `.env.example` file:
```bash
$ cp .env.example .env
```
4. Make any necessary google cloud settings below.

5.Start the application:
```bash
$ npm run start:dev
```

### Google cloud
To configure your local API with Google Cloud, you can watch [this video](https://youtu.be/ZjZGczINqe8?si=togh-sSYOB6Wg4yG) between time 1:48 and 6:15. With the `credentials.json` file in the root of the project, you can now run everything.

### Spreadsheet
To carry out the tests, you need a spreadsheet with the exact template. To do this, go to [here](https://docs.google.com/spreadsheets/d/1XvWJcRLj2WAeXO3ULQ_GxGm9---3SZkjMbGcXMJtt70/edit?usp=sharing), make a copy to your drive and add the email generated in your Google Cloud to the spreadsheet. Finally, copy the ID from the URL, EXAMPLE:
```
https://docs.google.com/spreadsheets/d/1XvWJcRLj2WAeXO3ULQ_GxGm9---3SZkjMbGcXMJtt70/edit#gid=0
```
The ID of this is **1XvWJcRLj2WAeXO3ULQ_GxGm9---3SZkjMbGcXMJtt70**. Open the `.env` file and enter your id.
```
PORT=3000
SPREADSHEET_ID=1PDe5EntHI7J6Woq0QDoE0dYA-h6d_xyTbxg-dg-Re6U // paste into this variable
```
