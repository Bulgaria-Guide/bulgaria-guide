# Bulgaria Guide

# Table of Contents

- [Overview](#overview)
- [API](#api)
  - [Users](#users)
    - [Register User](#register-user)
    - [Login](#login)
    - [Role](#role)
  - [Sights](#sights)
    - [Create](#create-sight)
    - [Delete](#delete-sight)
    - [Retrieve](#retrieve-sight)
    - [Retrieve pending](#retrieve-pending)
    - [Retrieve all](#retrieve-sights)
    - [Manage](#manage-sight)
    - [Rate](#rate-sight)
    - [Retrieve comments](#retrieve-comments)
  - [Comments](#users)
    - [Create](#add-comment)
    - [Delete](#delete-comment)
- [Database Model](#database-model)

## Overview

Bulgaria Guide is ...

## API

## Users

### Register User

#### Request

#### Route

`POST /v1/users/register`

#### Body

```json
{
  "username": "test_user",
  "password": "password"
}
```

#### Response

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 201 Created     | Will be returned if the user is successfully registered.                |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |
| 409 Conflict    | Will be returned if the user is already registered.                     |

### Login

#### Request

#### Route

`POST /v1/users/login`

#### Body

```json
{
  "username": "test_user",
  "password": "a"
}
```

#### Response

#### Body

```json
{
  "token": "2i7y4e1i2en1jnd112sdjabsflihbsafbsf",
  "role": "admin"
}
```

| Status Code      | Description                                             |
| ---------------- | ------------------------------------------------------- |
| 200 OK           | Will be returned if the user is successfully login.     |
| 401 Unauthorized | Will be returned if the user credentials are not valid. |

### Role

#### Request

#### Route

`GET /v1/users/role?username=aa`

#### Response

#### Body

```json
{
  "role": "admin"
}
```

| Status Code      | Description                                             |
| ---------------- | ------------------------------------------------------- |
| 200 OK           | Will be returned if the operation was successful.     |
| 400 BadRequest   | Will be returned if the request is not valid. |


## Sights

### Create Sight

#### Request

#### Route

`POST /v1/sights/create`

#### Authorization

`Bearer 2i7y4e1i2en1jnd112sdjabsflihbsafbsf`

#### Body

```json
{
  "name": "test-name",
  "description": "test-description",
  "picture": "base64 encoded picture",
  "workingTimeFrom": "8",
  "workingTimeTo": "17",
  "price": "12",
  "address": "test-address",
  "log": "69",
  "lat": "42",
  "category": "rest"
}
```

#### Response

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 201 Created     | Will be returned if the sight is successfully created.                  |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |
| 409 Conflict    | Will be returned if the sight is already created.                       |

### Delete Sight

#### Request

#### Route

`DELETE /v1/sights/:id/delete`

### Authorization - Admin only

`Bearer 2i7y4e1i2en1jnd112sdjabsflihbsafbsf`

#### Body

None

#### Response

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 200 OK          | Will be returned if the sight is successfully deleted.                  |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |

### Retrieve Sight

#### Request

#### Route

`GET /v1/sights/:id/retrieve`

#### Body

None

#### Response

#### Body

```json
{
  "id": "123",
  "name": "test-name",
  "description": "test-description",
  "picturePath": "/tmp/pic1",
  "workingTimeFrom": "8",
  "workingTimeTo": "17",
  "price": "12",
  "address": "test-address",
  "rating": 7.2,
  "weather": {
    "temp": 21,
    "outlook": "Предимно слънчево"
  },
  "category": "rest"
}
```

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 200 OK          | Will be returned if the operation was successful.                       |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |

### Retrieve Sights

#### Request

#### Route

`GET /v1/sights/retrieve?sort=method1&category=category1&min-rating=num&isworking=bool&state=pending`

_method1 = alphabetical | rating_

_category1 = all | culture | historical | rest | sports_

#### Body

None

#### Response

#### Body

```json
[
  {
    "id": "123",
    "name": "test-name",
    "description": "test-description",
    "picturePath": "/tmp/pic1",
    "workingTimeFrom": "8",
    "workingTimeTo": "17",
    "price": "12",
    "address": "test-address",
    "log": "69",
    "lat": "42",
    "rating": 7.2,
    "weather": {
      "temp": 21,
      "outlook": "Предимно слънчево"
    },
    "category": "rest"
  },
  {
    "id": "123",
    "name": "test-name",
    "description": "test-description",
    "picturePath": "/tmp/pic1",
    "workingTimeFrom": "8",
    "workingTimeTo": "17",
    "price": "12",
    "address": "test-address",
    "log": "69",
    "lat": "42",
    "rating": 7.2,
    "weather": {
      "temp": 21,
      "outlook": "Предимно слънчево"
    },
    "category": "rest"
  },
  {
    "id": "123",
    "name": "test-name",
    "description": "test-description",
    "picturePath": "/tmp/pic1",
    "workingTimeFrom": "8",
    "workingTimeTo": "17",
    "price": "12",
    "address": "test-address",
    "log": "69",
    "lat": "42",
    "rating": 7.2,
    "weather": {
      "temp": 21,
      "outlook": "Предимно слънчево"
    },
    "category": "rest"
  }
]
```

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 200 OK          | Will be returned if the operation was successful.                       |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |

### Retrieve Pending

#### Request

#### Route

`GET /v1/sights/retrieve/pending`

#### Authorization - Admin only

`Bearer 2i7y4e1i2en1jnd112sdjabsflihbsafbsf`

#### Body

None

#### Response

#### Body

```json
[
  {
    "id": "123",
    "name": "test-name",
    "description": "test-description",
    "picturePath": "/tmp/pic1",
    "workingTimeFrom": "8",
    "workingTimeTo": "17",
    "price": "12",
    "address": "test-address",
    "log": "69",
    "lat": "42",
    "category": "rest"
  },
  {
    "id": "123",
    "name": "test-name",
    "description": "test-description",
    "picturePath": "/tmp/pic1",
    "workingTimeFrom": "8",
    "workingTimeTo": "17",
    "price": "12",
    "address": "test-address",
    "log": "69",
    "lat": "42",
    "category": "rest"
  },
  {
    "id": "123",
    "name": "test-name",
    "description": "test-description",
    "picturePath": "/tmp/pic1",
    "workingTimeFrom": "8",
    "workingTimeTo": "17",
    "price": "12",
    "address": "test-address",
    "log": "69",
    "lat": "42",
    "category": "rest"
  }
]
```

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 200 OK          | Will be returned if the operation was successful.                       |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |


### Manage Sight

#### Request

#### Route

`PATCH /v1/sights/:id/manage`

#### Authorization - Admin only

`Bearer 2i7y4e1i2en1jnd112sdjabsflihbsafbsf`

#### Body

```json
{
  "accepted": true
}
```

#### Response

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 200 OK          | Will be returned if the sight status is successfully changed.                    |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |

### Rate Sight

#### Request

#### Route

`POST /v1/sights/:id/rate`

#### Authorization

`Bearer 2i7y4e1i2en1jnd112sdjabsflihbsafbsf`

#### Body

```json
{
  "rating": 6
}
```

#### Response

#### Body

```json
{
  "rating": 7.3
}
```

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 200 OK          | Will be returned if the rating is successfully added.                   |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |

### Retrieve Comments

#### Request

#### Route

`GET /v1/sights/:id/comments/retrieve`

#### Body

None

#### Response

#### Body

```json
[
  {
    "id": "1",
    "content": "test-content",
    "authorName": "name1",
    "date": "24-11-2019 14:13"
  },
  {
    "id": "2",
    "content": "test-content",
    "authorName": "name1",
    "date": "24-11-2019 14:13"
  },
  {
    "id": "3",
    "content": "test-content",
    "authorName": "name1",
    "date": "24-11-2019 14:13"
  }
]
```

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 200 OK          | Will be returned if the operation was successful.                       |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |

### Add Comment

#### Request

#### Route

`POST /v1/sights/:id/comments/add`

#### Authorization

`Bearer 2i7y4e1i2en1jnd112sdjabsflihbsafbsf`

#### Body

```json
{
  "content": "test-content"
}
```

#### Response

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 200 OK          | Will be returned if the comment is successfully added.                  |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |

### Delete Comment

#### Request

#### Route

`DELETE /v1/sights/:id/comments/:id/delete`

#### Authorization - _Admin/Author only_

`Bearer 2i7y4e1i2en1jnd112sdjabsflihbsafbsf`

#### Body

None

#### Response

| Status Code     | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| 200 OK          | Will be returned if the comment is successfully deleted.                |
| 400 Bad Request | Will be returned if the request is malformed or missing mandatory data. |

# TODO

Add expiration date on tokens, may store tokens in memory in java servers and on logout the token is deleted. UI should change to not logged in user when token is expired. If java stores the tokens in memory, UI needs to send logout request then java deletes the token.
