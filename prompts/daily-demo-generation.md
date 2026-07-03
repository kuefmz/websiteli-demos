# Daily Websiteli demo generation prompt

Use this prompt inside the scheduled ChatGPT task when creating the daily prospect demo.

## Goal

Create one personalized, static, review-ready demo website for the best Websiteli lead of the day and commit it to `kuefmz/websiteli-demos` on `main`.

## Required output

Create a folder:

```text
prospects/{yyyy-mm-dd}-{prospect-slug}/
```

Inside it, create at least:

```text
index.html
notes.md
email.md
```

The deployed demo URL will be:

```text
https://kuefmz.github.io/websiteli-demos/prospects/{yyyy-mm-dd}-{prospect-slug}/
```

## Demo requirements

- Use only public, factual information about the business.
- Do not copy protected branding, paid images, logos, or text.
- Clearly label the page as a `Websiteli concept demo`.
- Make the design professional, mobile-first, and conversion-focused.
- Include a strong hero section, services/offers, trust section, contact CTA, and local SEO-friendly structure.
- Add a Websiteli attribution/footer link to `https://websiteli.ch/?utm_source=demo&utm_medium=outreach&utm_campaign=daily_demo`.
- Add `noindex, nofollow` metadata unless the prospect becomes a client.

## Email requirements

If a valid public email address is available, send a concise email via Gmail after the demo is committed. Include:

- The prospect's name/business name.
- A short personalized reason why the website demo was made.
- The demo URL.
- The Websiteli URL: `https://websiteli.ch/?utm_source=email&utm_medium=outreach&utm_campaign=daily_demo`.
- A soft CTA: ask whether they would like the demo adapted to their real content.

Do not claim the demo is their official website. Do not mention scraping. Do not send if the email address is uncertain or not publicly available.
