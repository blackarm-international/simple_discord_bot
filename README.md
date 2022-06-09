# simple_discord_bot

go to the discord developer portal

https://discord.com/developers/applications

create an application

create a bot

copy config.json.example to config.json

paste the bot token into config.json

```
npm install

node index.js
```

to get the bot added to a server you need to get the server owner to visit a url.

take the application id from the url - https://discord.com/developers/applications/980178916486565898/information

and put it into a url like this - https://discordapp.com/oauth2/authorize?client_id=980178916486565898&scope=bot
