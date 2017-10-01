﻿# GitHub Email Fetcher


## Description
This node script fetches all emails that are publicly associated with a particular GitHub account. The GitHub API is used to search through the public events and the user profile.


## Installation
> npm install

The only dependency is [request](https://www.npmjs.com/package/request).


## Usage
> node index.js \<Username> [\<UserAgent\>]

or

> npm run start \<Username> [\<UserAgent\>]

The default user agent "GitHub-Email-Fetcher" is used when the user agent argument is omitted.


### Example

```
C:\GithubEmailFetcher> node index.js octocat FancyUA
octocat@nowhere.com
octocat@github.com
```

"octocat@nowhere.com" was fetched from the events log (https://api.github.com/users/octocat/events/public)
```json
[
   {
      "id":"3227090387",
      "type":"PushEvent",
      "actor":{
         "id":​583231,
         "login":"octocat",
         "gravatar_id":"",
         "url":"https://api.github.com/users/octocat",
         "avatar_url":"https://avatars.githubusercontent.com/u/583231?"
      },
      "repo":{
         "id":​17881631,
         "name":"octocat/octocat.github.io",
         "url":"https://api.github.com/repos/octocat/octocat.github.io"
      },
      "payload":{
         "push_id":​822673384,
         "size":​1,
         "distinct_size":​1,
         "ref":"refs/heads/master",
         "head":"e2daa5755ee24217f39a10dc6b94988c19e0f109",
         "before":"67c0afc1da354d8571f51b6f0af8f2794117fd10",
         "commits":[
            {
               "sha":"e2daa5755ee24217f39a10dc6b94988c19e0f109",
               "author":{
                  "email":"octocat@nowhere.com",
                  "name":"The Octocat"
               },
               "message":"created CNAME file",
               "distinct":true,
               "url":"https://api.github.com/repos/octocat/octocat.github.io/commits/e2daa5755ee24217f39a10dc6b94988c19e0f109"
            }
         ]
      },
      "public":true,
      "created_at":"2015-10-10T21:35:59Z"
   }
]
```

"octocat@github.com" was fetched from the user profile (https://api.github.com/users/octocat)
```json
{
    "login": "octocat",
    "id": ​583231,
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/octocat",
    "html_url": "https://github.com/octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
    "received_events_url": "https://api.github.com/users/octocat/received_events",
    "type": "User",
    "site_admin": false,
    "name": "The Octocat",
    "company": "GitHub",
    "blog": "http://www.github.com/blog",
    "location": "San Francisco",
    "email": "octocat@github.com",
    "hireable": null,
    "bio": null,
    "public_repos": ​5,
    "public_gists": ​8,
    "followers": ​1184,
    "following": ​6,
    "created_at": "2011-01-25T18:44:36Z",
    "updated_at": "2015-11-06T18:55:49Z"
}
```
