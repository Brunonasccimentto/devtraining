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

5. Start the application:
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

# Routes
### POST `api/students/status` - update students status

**REQUEST** <br/>
HEADER: not required <br/>
BODY (JSON): not required 

**RESPONSE** <br/>
STATUS: 200 OK <br/>
BODY (JSON):
```json
{
  "message": "The exel table has been updated."
}
```
STATUS: 500 BAD REQUEST<br/>
BODY (JSON):
```json
{
  "error": "Internal server error."
}
```

### GET `api/spreadsheet` - get json spreadsheet

**REQUEST** <br/>
HEADER: not required <br/>
BODY (JSON): not required

**RESPONSE** <br/>
STATUS: 200 OK<br/>
BODY (JSON):
```json
{
	"config": {
		"url": "https://sheets.googleapis.com/v4/spreadsheets/1CK_NxArDT5sorTzBh3H7dhV-TBaYIgHH5cRG4DfVok4/values/engenharia_de_software?valueRenderOption=UNFORMATTED_VALUE",
		"method": "GET",
		"userAgentDirectives": [
			{
				"product": "google-api-nodejs-client",
				"version": "7.0.1",
				"comment": "gzip"
			}
		],
		"headers": {
			"x-goog-api-client": "gdcl/7.0.1 gl-node/20.5.0",
			"Accept-Encoding": "gzip",
			"User-Agent": "google-api-nodejs-client/7.0.1 (gzip)",
			"Authorization": "Bearer ya29.c.c0AY_VpZimIJSgKuBfusrqXYD2mnh8SEvLhs27YZaXOEIJBycsA5sjr75NsYKG955SRh5dVlOi2J2BYEORZ3bBxiyW920AB91R-QrC32kWS4ggvdWn8gWu9hc8PGmgL6WsH4Fn7TBB8rbEuMJUWd43cOwIklRl2mcrMImCqhS4qN5YtPeECVNUVe9QHr47jGUpwiG9N9hxGBgK7GPF-F5iCki5ARxMuLW0xd65JxJuxkk1D0-M9nxRTZAI4EMxMcgVh0Fqnj9fVv4AXimT61SgYF-7UE4Y9qA5JbcJUwfVm8F45egbhB_pQ3wSiZ_tzsJVL2T7_9DvuYWKs1z49yFMzZUQOrHteMJ76zHE7Z_AbDjZndCxJqbmENoG384D2wcc2R1QvvjS4y_9My6d1j1uQ5Ucv3Bmz-3jx--0aqxnUdwx2kXJaXf-jxp8u-4gYRB23BmRFYeWi3qW-R6h0MbsOvQSfkwWd4s-2auao5Iv5kukhf0Q_2ZOmoodw0pMY-kSnFttbJo3up0qVhQw36_6Xb4ys8B6eMIUfgfziQ5XW0vZ9qc6ish4I0rzOb2grOz7n2B8MZnvRoQ7t93UI4wwZds2i7q8iuhrmF92FvVae9nsjh4eQfQuQ93mgb6bbsIF4rrkwjp854B4xtJhl6V0cmFfQMengV7zrZ1tmsM_M9vd7SqOc0Meux89FFIrugYxo0JRbn4me8IYuhkJu2Fj1Re52ubadn9WxSbZReOY4nzQ_Ug6uZnrdR6cpkQUg1u5jwmdOu3aOJRlVQjoI2-fn_9XSbVvmqf0ofxe73n_BY-tOU19p6OOfVpX20qjc_xY-8SRYe29iOt_gfvoxRVQq_heYsbUkSwyscc6VnQtBvk8m1Ra8yt977i_vhv7i12eYx7n7X4UfV0Qitq_0tr9eMZ3ho1g1qQUvtzFXbO9b1olVgio95Z4IdwR0rQM9cIfzs1UyOcZaFR7h9sBpdnsgXV9IVjRyvmUZO0RnfjBub07FtvkrOo3_91"
		},
		"params": {
			"valueRenderOption": "UNFORMATTED_VALUE"
		},
		"retry": true,
		"responseType": "unknown"
	},
	"data": {
		"range": "engenharia_de_software!A1:AC1004",
		"majorDimension": "ROWS",
		"values": [
			[
				"Engenharia de Software"
			],
			[
				"Total de aulas no semestre: 60"
			],
			[
				"Matricula",
				"Aluno",
				"Faltas",
				"P1",
				"P2",
				"P3",
				"Situação",
				"Nota para Aprovação Final"
			],
			[
				1,
				"Eduardo",
				8,
				35,
				63,
				61,
				"Exame final",
				5
			],
			[
				2,
				"Murilo",
				8,
				64,
				97,
				36,
				"Exame final",
				4
			],
			[
				3,
				"Guilherme",
				19,
				68,
				74,
				51,
				"Reprovado por falta",
				0
			],
			[
				4,
				"Flavia ",
				23,
				66,
				98,
				62,
				"Reprovado por falta",
				0
			],
			[
				5,
				"Ruan",
				13,
				80,
				65,
				41,
				"Exame final",
				4
			],
			[
				6,
				"Arnando",
				23,
				83,
				68,
				77,
				"Reprovado por falta",
				0
			],
			[
				7,
				"Lucas",
				5,
				38,
				53,
				80,
				"Exame final",
				5
			],
			[
				8,
				"Fabio",
				10,
				53,
				96,
				89,
				"Aprovado",
				0
			],
			[
				9,
				"Alisson",
				15,
				45,
				61,
				68,
				"Exame final",
				5
			],
			[
				10,
				"Felipe",
				12,
				32,
				41,
				85,
				"Exame final",
				5
			],
			[
				11,
				"Rachel",
				11,
				84,
				66,
				39,
				"Exame final",
				4
			],
			[
				12,
				"Jouy",
				13,
				42,
				93,
				57,
				"Exame final",
				4
			],
			[
				13,
				"François",
				19,
				59,
				87,
				89,
				"Reprovado por falta",
				0
			],
			[
				14,
				"Dâmaris",
				10,
				44,
				50,
				62,
				"Exame final",
				5
			],
			[
				15,
				"Leonardo",
				16,
				83,
				92,
				32,
				"Reprovado por falta",
				0
			],
			[
				16,
				"Guilherme ",
				6,
				36,
				38,
				76,
				"Exame final",
				5
			],
			[
				17,
				"Wesley",
				16,
				41,
				52,
				87,
				"Reprovado por falta",
				0
			],
			[
				18,
				"Yuri",
				2,
				87,
				75,
				50,
				"Aprovado",
				0
			],
			[
				19,
				"Kira",
				8,
				36,
				46,
				48,
				"Reprovado por Nota",
				0
			],
			[
				20,
				"Cleici",
				22,
				91,
				88,
				92,
				"Reprovado por falta",
				0
			],
			[
				21,
				"João Moacir",
				23,
				38,
				90,
				98,
				"Reprovado por falta",
				0
			],
			[
				22,
				"Bruno",
				15,
				96,
				37,
				100,
				"Aprovado",
				0
			],
			[
				23,
				"Elcio",
				9,
				73,
				71,
				75,
				"Aprovado",
				0
			],
			[
				24,
				"Criscia",
				0,
				50,
				95,
				84,
				"Aprovado",
				0
			]
		]
	},
	"headers": {
		"alt-svc": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000",
		"cache-control": "private",
		"content-encoding": "gzip",
		"content-type": "application/json; charset=UTF-8",
		"date": "Thu, 08 Feb 2024 19:05:41 GMT",
		"server": "ESF",
		"transfer-encoding": "chunked",
		"vary": "Origin, X-Origin, Referer",
		"x-content-type-options": "nosniff",
		"x-frame-options": "SAMEORIGIN",
		"x-l2-request-path": "l2-managed-6",
		"x-xss-protection": "0"
	},
	"status": 200,
	"statusText": "OK",
	"request": {
		"responseURL": "https://sheets.googleapis.com/v4/spreadsheets/1CK_NxArDT5sorTzBh3H7dhV-TBaYIgHH5cRG4DfVok4/values/engenharia_de_software?valueRenderOption=UNFORMATTED_VALUE"
	}
}
```
STATUS: 500 BAD REQUEST<br/>
BODY (JSON):
```json
{
  "error": "Internal server error."
}
```
