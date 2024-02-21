Endpoints :

/getID 
- gets you ID for a given cryptocurrency
- requrest body
   ```
   {
   'name' : 'Bitcoin'
   }
   ```

/convert
- convert one crypto to other on any given date
- requrest body
   ```
   {
    "fromCurrency" : "ethereum" ,
    "toCurrency" : "bitcoin",
    "date" : "20-02-2024"
  }
   ```
- date format : 'dd-mm-yyyy'

/companies/public_treasury
-get list of companies holding some crypto
-request body
```
  {
  "currency" : "bitcoin"
  }
```
