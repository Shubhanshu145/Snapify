<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).



# Authentication API

This API provides basic user registration, login, and profile retrieval functionalities.

## Endpoints

### POST /auth/register

**Description:** Registers a new user.

**Request Body (application/json):**

```json
{
  "email": "abc@gmail.com",
  "password": "password",
  "name": " ",
  "role":" "
}
* **POST /auth/login**: Logs in an existing user and returns a JWT (JSON Web Token) for authentication.
    * **Request Body (application/json):**
        ```json
        {
          "email": "abc@gmail.com",
          "name":"abc"
          "password": "password"
        }
        ```
    * **Response (application/json) - Success (HTTP 200 OK):**
        ```json
        {
          "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflRzFWEXO2EOKJW-lJSeyKKDxxSUcQLM64_Z9ayhQY"
        }
        ```
    * **Response (application/json) - Error (e.g., HTTP 401 Unauthorized, 400 Bad Request):**
        ```json
        {
          "statusCode": 401,
          "message": "Invalid credentials",
          "error": "Unauthorized"
        }
* **GET /me**: Retrieves the profile details of the currently authenticated user. Requires a valid JWT in the `Authorization` header (Bearer token).
    * **Request Headers:**
        ```
        Authorization: Bearer <your_jwt_token>
        ```
    * **Response (application/json) - Success (HTTP 200 OK):**
        ```json
        {
          "id": 1,
          "email": "abc@gmail.com",
          "name": "abc",
          "created_at": "2025-04-18T14:25:00.000Z",
          "updated_at": "2025-04-18T14:25:00.000Z"
          // ... other user profile information
        }
        ```
    * **Response (application/json) - Error (e.g., HTTP 401 Unauthorized):**
        ```json
        {
          "statusCode": 401,
          "message": "Unauthorized",
          "error": "Unauthorized"
        }
        ```
### Photo Management

* **POST /photos/upload**: Uploads a photo with an optional caption. Requires a valid JWT in the `Authorization` header (Bearer token).
    * **Request Headers:**
        ```
        Authorization: Bearer <your_jwt_token>
        Content-Type: multipart/form-data
        ```
    * **Request Body (form-data):**
        * `image`: The image file to upload.
        * `caption` (optional): A string describing the photo.
    * **Response (application/json) - Success (HTTP 201 Created):**
        ```json
        {
          "id": "unique_photo_id",
          "filename": "image.jpg",
          "size": 12345,
          "path": "/uploads/user_id/image.jpg",
          "caption": "My awesome photo",
          "userId": 1,
          "uploadedAt": "2025-04-18T14:25:00.000Z"
        }
        ```
    * **Response (application/json) - Error (e.g., HTTP 400 Bad Request, 401 Unauthorized):**
        ```json
        {
          "statusCode": 400,
          "message": "Invalid file format" | "Caption too long",
          "error": "Bad Request"
        }
        ```

        ```
