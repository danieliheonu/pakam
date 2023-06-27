# HOW TO RUN THE APPLICATION

-    create a `.env` file in the root directory of user-wallet, user-management and payment-gateway
-    copy the contents of `.env.example` file to `.env` file
-    create a mailtrap account and copy the username and password to the `.env` file of payment-gateway
-    create a twilio account and copy the token, sid and number to the `.env` file of payment-gateway
-    run `npm install` in the root directory of user-wallet, user-management and payment-gateway
-    run `npm run dev` in the root directory of user-wallet, user-management and payment-gateway
-    the automated notification function is located in the server file of the payment-gateway directory and can be tested once the payment-gateway server as well as the other two microservices are running
-    the email notifications can be seen in the mailtrap account while for the sms, you can pass your phone number in the `to` argument under the `sendSMS` function using the format provided

# HOW TO RUN WITH PREFERRED PORTS

-    create a `.env` file in the root directory of user-wallet, user-management and payment-gateway
-    copy the contents of `.env.example` file to `.env` file
-    change the port number in the `.env` file of user-wallet, user-management and payment-gateway
-    update the api url for user-management and user-wallet in the `.env` file of payment-gateway
-    create a mailtrap account and copy the username and password to the `.env` file of payment-gateway
-    create a twilio account and copy the token, sid and number to the `.env` file of payment-gateway
-    run `npm install` in the root directory of user-wallet, user-management and payment-gateway
-    run `npm run dev` in the root directory of user-wallet, user-management and payment-gateway
-    the automated notification function is located in the server file of the payment-gateway directory and can be tested once the payment-gateway server as well as the other two microservices are running
-    the email notifications can be seen in the mailtrap account while for the sms, you can pass your phone number in the `to` argument under the `sendSMS` function using the format provided
