---
title: BetterInvites
description: "BetterInvites makes Discord invites more powerful by giving members who join with an invite certain roles"
---

# BetterInvites
## ⚠️ This bot is deprecated. Please use [BetterInvites](https://thymedev.github.io/invite/betterinvites) instead.

<div class="text-xl">The best bot for all your invite roles. 100% free, forever.</div>

BetterInvites makes Discord invites more powerful by giving members who join with an invite certain roles

## [Invite me](https://thymedev.github.io/invite/betterinvites-old)
## [Support server](https://thymedev.github.io/discord.html)

<br />

## Commands
prefix: **`b`**

**`bstart`**: 
>Starts the process to create a new invite role.
>Choose to set up by choosing a invite link, or typing it
>Then select your role(s), after you see a **Done!**, everything is set up!
![Image of /bstart command, with "Select" and "Link" buttons below](/media/BetterInvites_bstart.png){.bg-discord-bg-primary}

**`blist`**:
>Lists the set up invite roles.

**`bhelp`**:
>Displays helpful information (basically this page)

## Something is not working!
### `bstart` buttons are doing nothing!
Verify that the bot has view channel permissions. It needs view channel permission to edit messages.

### Roles are not being assigned!
For the bot to give roles, it needs some permissions. Try kicking and reinviting the bot with [this](https://thymedev.github.io/invite/betterinvites-old).
If the issue still persists, verify that role hierarchies allow BetterInvites to give those roles. It cannot give roles higher on the hierarchy than itself. [more info](https://support.discord.com/hc/en-us/articles/214836687-Role-Management-101).

It will send a message in the server's default channel if someone joins and it cannot give a role.
This will also happen if a role is deleted.

## More Info
### Suggestions and bug reports
Please direct all suggestions and bug reports to [our support server](https://thymedev.github.io/discord.html)

### Remove a role invite
Simply go through the process again and when it asks for roles to assign, just send:
>none

or send a message which mentions no roles.

### Assign multiple roles for each invite
If you would like an invite to give multiple roles when someone joins, just mention more roles when prompted.
