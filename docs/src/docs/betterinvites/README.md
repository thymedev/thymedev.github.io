---
description: "BetterInvites makes Discord invites more powerful by giving members who join with an invite certain roles."
---

# BetterInvites
BetterInvites makes Discord invites more powerful by giving members who join with an invite certain roles.

## Features
Currently there is 1 feature.
Invite Roles, give new members role(s) when they join using a specified invite.

## Documentation
prefix: **`b`**

**`bstart`**: 
>Starts the process to create a new role invite
>Choose to set up by choosing a invite link, or typing it
>Then select your role(s), after you see a **Done!**, everything is set up!

**`bhelp`**:
>Displays helpful information (basically this page)


## Something is not working!
### `bstart` buttons are doing nothing!
Verify that the bot has view channel permissions. It needs view channel permission to edit messages.

### Roles are not being assigned!
For the bot to give roles, it needs some permissions. In the chance that it is lacking those permissions, try kicking and reinviting the bot with [this](https://discord.com/api/oauth2/authorize?client_id=854104839331512400&permissions=2416438512&scope=applications.commands%20bot). 
If the issue still persists, verify that role hierarchies allow BetterInvites to give those roles. It cannot give roles higher on the hierarchy than itself. [more info](https://support.discord.com/hc/en-us/articles/214836687-Role-Management-101)

## More Info
### Suggestions and bug reports
Please direct all suggestions and bug reports to [our support server](https://thymedev.github.io/discord). If the support server link is broken, feel free to dm CupCake#3841

### Remove a role invite
Simply go through the process again and when it asks for roles to assign, just send:
>none

or send a message which mentions no roles.

### Assign multiple roles for each invite
If you would like an invite to give multiple roles when someone joins, just mention more roles when prompted.

### [Support server](https://thymedev.github.io/discord)
