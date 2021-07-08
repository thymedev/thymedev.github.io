---
description: "The best bot for all your censoring needs. 100% free, forever. BetterCensor is the powerful Discord moderation bot that automatically keeps your servers clean, with Google Sheets Integration, for powerful editing, and sharing anywhere."
---

# BetterCensor

<div class="text-xl">The best bot for all your censoring needs. 100% free, forever.</div>

BetterCensor is the powerful Discord moderation bot that automatically keeps your servers clean, with Google Sheets Integration, for powerful editing, and sharing anywhere.

## [Invite me](https://thymedev.github.io/invite/betterinvites)
## [Support server](https://thymedev.github.io/discord.html)

## Features
- 100% free, forever
- Advanced integration with Google sheets to easily create, edit and share censor lists
- Webhook based censoring to make censoring seemless
- Options for ###, \*\*\*, or
![spoilers](/media/ezgif-2-80ca74867615[1].gif)


## Commands
prefix: **`c`**

**`cset [https://docs.google.com/spreadsheets/d/.../]`**
> Sets this server's custom censor list.
> Words in this Google sheets will be censored.

**`cupdate`**
> Updates this server's censor list from linked Google Sheets.
> If you update your Google Sheets, run this command to make new changes apply.

**`coverride [t,f]`**
> Sets this server's override settings. Default set to false.
> If set to true, only this server's google sheets censor list will be used.
> If set to false, both the server's censor list and the [default list](https://raw.githubusercontent.com/thymedev/censor-bot/master/DefaultList.json) will be enforced.

**`cwith [#, *, |, or d]`**
> Sets the censoring options to ###, \*\*\*, spoliers, or deleting the message respectively.
> ex: `This is a censored term --> This is a *************`

**`cignore [#channel, #channel1, ...]`**`
> Ignores mentioned channels.

**`cignoreremove [#channel, #channel1, ...]`**
> Listens to mentioned channels.

**`chelp`**:
> Displays link to this document.

## Something is not working!
### Messages are not being censored
To ensure the bot has all the permissions necessary, try reinviting it [here](https://thymedev.github.io/invite/betterinvites).
Once it is added, a message will be sent. If you see any missing permissions in that message, critical functions may not work.

## More Info
### Suggestions and bug reports
Please direct all suggestions and bug reports to [our support server](https://thymedev.github.io/discord.html)

### How do I remove a Google Sheet?
Delete all the content in the linked Google Sheet, do **`cupdate`**, and simply leave it at that. You can delete the Google Sheet if you want, and it won't update until you try to do **`cupdate`**.
