---
title: BetterInvites
description: "BetterInvites makes Discord invites more powerful by giving members who join with an invite certain roles"
---

<span class="px-3 py-1 rounded-full bg-green-600 text-white text-xs select-none">📣 New v2</span> 
<span class="px-3 py-1 rounded-full bg-green-600 text-white text-xs select-none">Supports Slash Commands</span> 

<a href="/status/"><span class="px-3 py-1 rounded bg-yellow-400 text-black text-xs select-none">⚠️ Active Issues - Read More</span></a> 


# BetterInvites

<div class="text-xl">The best bot for all your invite roles. 100% free, forever.</div>

BetterInvites makes Discord invites more powerful by giving members who join with an invite certain roles

## [Invite me](https://thymedev.github.io/invite/betterinvites)
## [Support server](https://thymedev.github.io/discord.html)

<br />

## Commands
**`/createinvite [invite]`**: 
>Starts the process to create a new invite role.  
>Use autocomplete to select an existing invite or type an invite code. discord.gg/abcdefg has code abcdefg  
>Then select your role(s), and click ✅, everything is set up!

![Image of /createinvite command, with an invite selected](./4191f8619c91a1a76d23623b4f5e709c.png){.bg-discord-bg-primary}

**`/display`**:
>Lists the set up invite roles.

**`/refresh`**:
>Refreshes invite cache. Run this if you believe the bot missed a member joining.

**`/help`**:
>Displays helpful information (basically this page)

<br />

### Remove a role invite
Use the `/createinvite [invite]` command again and don't select any roles. The bot will not assign any roles to people who use that invite.
Confirm it has been removed with `/display`.

### Assign multiple roles for each invite
If you would like an invite to give multiple roles when someone joins, select multiple roles when prompted.

<br />

## Something is not working!
### It says "I can't interact with the following roles:..."
Verify that role hierarchies allow BetterInvites to give those roles. It cannot give roles higher on the hierarchy than itself. [more info](https://support.discord.com/hc/en-us/articles/214836687-Role-Management-101).

### Roles are not being assigned!
It's possible permissions may not be set up correctly. Try kicking and reinviting the bot with [this](https://thymedev.github.io/invite/betterinvites).

## More Info

### Suggestions and bug reports
Please direct all suggestions and bug reports to [our support server](https://thymedev.github.io/discord.html)
