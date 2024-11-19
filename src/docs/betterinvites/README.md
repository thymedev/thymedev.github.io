---
title: BetterInvites
description: "BetterInvites makes Discord invites more powerful by giving members who join with an invite certain roles"
---

<span class="px-3 py-1 rounded-full bg-green-600 text-white text-xs select-none">📣 New v2</span> 
<span class="px-3 py-1 rounded-full bg-green-600 text-white text-xs select-none">Supports Slash Commands</span> 

<!-- <a href="/status/"><span class="px-3 py-1 rounded bg-yellow-400 text-black text-xs select-none">⚠️ Active Issues - Read More</span></a>  -->


# BetterInvites

<div class="text-xl">The simple, better Discord bot for invite roles.</div>

BetterInvites makes Discord invites more powerful by giving members who join with an invite certain roles

## [Invite me](https://thymedev.github.io/invite/betterinvites)
## [Support server](https://thymedev.github.io/discord.html)

<br />

## Commands
**`/createinvite [invite]`**: 
>Starts the process to create a new invite role.  
>Use autocomplete to select an existing invite or type an invite code. discord.gg/abcdefg has code abcdefg  
>Then select your role(s), and click ✅, everything is set up!

![Image of /createinvite command, with an invite selected](./Betterinvites-gif.gif){.bg-discord-bg-primary}

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

### My invite isn't showing up

Start typing your invite URL, and it should appear.

*Example: for invite `abCDeF`, start typing `ab`*

**Note: [Server vanity invite URLs](https://support.discord.com/hc/hi-in/articles/115001542132-Server-Vanity-URLs) are not supported because they are generic and public.** To add a role for all new joiners, we recommend using regular auto-role bots.


### Current members can't get the new invite role

Invite roles are only for new users.

This is a Discord limitation, since we only use Discord invite URLs.

For existing users, we recommend using reaction-role bots in a private channel.

### It says "I can't interact with the following roles:..."
Verify that role hierarchies allow BetterInvites to give those roles. It cannot give roles higher on the hierarchy than itself. [more info](https://support.discord.com/hc/en-us/articles/214836687-Role-Management-101).


### How do I make my invite last forever?

When creating your Discord invite link, please [check your invite settings popup](https://support.discord.com/hc/en-us/articles/208866998-Invites-101):

- Change "Expire after" to **Never**
- Change "Max number of uses" to **No limit**

<div style="display:grid;grid-template-columns: repeat(3, minmax(0, 1fr));">

![Discord invite, popup, "Your invite link expires in 7 days. Edit invite link"](https://support.discord.com/hc/article_attachments/15156541577367)

![Step 2](https://support.discord.com/hc/article_attachments/15156564355863)

![Step 3](https://support.discord.com/hc/article_attachments/15156535233175)

</div>


### Roles are not being assigned!
It's possible permissions may not be set up correctly. Try kicking and reinviting the bot with [this](https://thymedev.github.io/invite/betterinvites).


## More Info

### Suggestions and bug reports
Please direct all suggestions and bug reports to [our support server](https://thymedev.github.io/discord.html)
