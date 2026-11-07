# AY! GUAU · Website demo and booking handoff

This is a static prospect demo. Serve this folder over HTTP, for example with
`python3 -m http.server 8080 --bind 127.0.0.1` from the folder. GitHub Pages serves
this same folder from the repository's separate `gh-pages` branch. There is no
package installation or build.

## Research and artwork

| Source | Evidence and limits |
| --- | --- |
| [Official site](https://ayguau.mx/) and [service menu](https://ayguau.mx/servicios/) | Address, contact email, published hours, basic bath, grooming, and individual services. Official site uses Fredoka and has a registered black, blue and red logo and grooming photography. |
| [Logo reference](https://ayguau.mx/wp-content/uploads/2025/04/cropped-ayguau_logo-1-300x268.jpeg) | The concept uses blue and red accents and an original text wordmark. Permission to reuse the official logo and photos has not been established. |
| [Official-site map target](https://maps.google.com/maps?iwloc=near&output=embed&q=ay+guau&t=m&z=10), [address search](https://www.google.com/maps/search/?api=1&query=AY%21%20GUAU%20Professional%20Grooming%2C%20Calzada%20de%20las%20%C3%81guilas%201176%2C%20Ciudad%20de%20M%C3%A9xico) and [directory](https://esteticacaninacercademi.com.mx/estetica-canina-cerca-de-mi-ciudad-de-mexico/estetica-canina-especializada-ciudad-de-mexico/estetica-canina-cerca-de-mi-ciudad-de-m%C3%A9xico-ay-guau-professional-grooming/) | Directory corroborates the address and supplied WhatsApp, and reports different hours. The site uses first-party published hours with a confirmation note. The precise Maps place ID and current hours still need owner confirmation. |
| [Instagram](https://www.instagram.com/ay_guau_grooming/) | Supplied profile, linked in the demo. Posts were inaccessible in public retrieval. |

The official site's WhatsApp link differs from the project brief. The preview
uses the brief's +52 55 2314 9411, which the directory also lists. Confirm the
preferred WhatsApp, address and Maps pin, hours including holidays, and current
menu before launch. Confirm real appointment durations, buffer, capacity,
booking rules, privacy notice, and booking account ownership.

The four generated WebP files in `assets/` are illustrative. Replace
`hero.webp`, `portrait.webp`, `brushing.webp`, and `studio.webp` with approved
photos of the dogs, the grooming process, and the actual studio. Update alt
text, image dimensions, captions and Open Graph metadata when replacing them.
Replace the temporary wordmark and icon with owner-approved logo files.

## Temporary Calendly preview

The live preview currently uses the existing Websiteli 30-minute Calendly event,
as approved for temporary use. The visitor sees a warning before opening the
embed. Confirming a booking can reserve real time on the Websiteli calendar.
The event's calendar destination has not been verified. No booking was submitted
during deployment verification.

Set `enabled: false` in `booking-config.js` and redeploy to remove booking from
the preview. The original Calendly link remains controlled by Websiteli.
Use a dedicated grooming event for client use. The
[Calendly Free plan](https://calendly.com/pricing) supports one event type and
one calendar connection. To return to Cal.com, clear `calendlyUrl` and follow
the setup below with public booking disabled until approved.

## Cal.com setup for separate grooming services

The [Cal.com Individuals plan](https://site.cal.com/pricing) is free for one
scheduler and supports multiple event links and calendars. The optional Teams
plan is listed at US$12 per user per month with annual billing. No paid plan is
required for the proposed one-host setup. [Google Appointment Schedules](https://support.google.com/calendar/answer/16287038)
limits personal accounts to one booking page and restricts secondary-calendar
schedules to eligible Workspace plans.

The site embeds the chosen Cal.com event type after a visitor selects a
service. Cal.com owns availability, booking, and confirmations. Google OAuth
takes place inside Cal.com. The static site holds no credentials, event details
or attendee records.

## Connect a dedicated Google demo calendar

1. Use a separate Google demo login you control if your primary Google
   Calendar must remain outside Cal.com's OAuth grant. Google OAuth authorizes
   at account scope. A secondary calendar under a personal login does not
   itself isolate that login's primary calendar from the OAuth permission.
   Under the demo login, create a dedicated calendar called
   **AY! GUAU · Demo**, and set its timezone to Mexico City.
2. Use a dedicated Cal.com profile. In [calendar settings](https://app.cal.com/settings/my-account/calendars),
   connect the demo Google login via Google's consent screen. Under **Check for
   conflicts**, select only **AY! GUAU · Demo**. Under **Add to calendar** select
   that same calendar. Check every event type for calendar overrides.
3. Create one shared availability schedule in `America/Mexico_City`. Use
   approved demo hours, for example Tuesday–Saturday 10:00–19:00 and Sunday
   10:00–18:00. Add overrides for days off. Keep all three event types on the
   same schedule, host and conflict calendar.
4. Create three hidden event types with demo titles and descriptions stating
   that the reservations are test events. Use 45 minutes for Baño básico, 75
   for Estética canina, and 15 for Corte de uñas, with a 15-minute after-buffer
   on each. These are examples. Disable seats, conferencing and payments.
   Require only name and email and disable guest invitations. Set the booking
   language to Spanish where supported and lock the booking timezone to
   `America/Mexico_City`. Check both in the booking UI and confirmation.
5. Keep the published `booking-config.js` disabled and its links blank. A
   hidden provider event remains bookable by link. Use access-controlled
   provider links or single-use private links for the initial provider checks.
   For an approved embedded test, use a local-only copy of this folder with
   the dedicated demo event paths in `calLink` and `enabled: true`. Do not
   commit or share the local config. Paste only `username/event-slug`, never a
   token or a private booking URL. GitHub Pages cannot protect config files.
6. Verify that a new **Busy** block you create solely in the demo calendar
   suppresses the overlapping slots for all services. Make a test reservation
   with your own test email. Verify confirmation, event destination, buffer,
   cutoff, and Mexico City start time. Reload in a second session and attempt
   to reserve the same or an overlapping slot for another service. Repeat
   with two simultaneous submissions. Check 320, 375 and 390 px, blocked
   scripts, a stale event link, and the standalone fallback. Leave existing
   calendar events alone. Cancel only newly created test reservations after
   verifying them.

[Google integration](https://cal.supportpages.io/calendars-integrations/how-to-connect-google-calendar-to-cal-com) ·
[Buffer setup](https://cal.supportpages.io/event-types/how-to-add-buffer-time-before-and-after-meetings) ·
[Embed documentation](https://site.cal.com/embed) ·
[Link visibility](https://cal.supportpages.io/getting-started/how-to-find-and-share-your-personal-booking-link)

## Switch to the client's calendar

1. Keep public booking off while the owner creates her Cal.com profile and
   connects her chosen Google account through OAuth. Select her booking
   destination and conflict calendars and recreate the approved service event
   types and schedule. Existing demo bookings stay in the demo account.
2. In a local test copy, update the names, durations and event paths in
   `booking-config.js` and repeat the end-to-end verification with permission.
   Update the demo example durations in `index.html` if they are still shown.
3. After the owner approves, update the notice, durations and booking copy to
   match production, set `enabled: true` with her approved public event paths,
   and deploy. Update the robots and Open Graph settings if the production
   URL differs. For emergency closure, set `enabled: false` and redeploy.
   Also close availability in Cal.com, since previously shared direct links
   can bypass the website switch.
